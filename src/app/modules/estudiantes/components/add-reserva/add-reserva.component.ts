import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { ReglaType } from 'src/app/core/data/interfaces/ui/reglaType.interface';
import { ReservaType } from 'src/app/core/data/interfaces/ui/reservaType.interface';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { ReservasService } from 'src/app/core/services/reservas.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Utils } from 'src/app/core/shared/utils/utils';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { ReglasService } from 'src/app/core/services/reglas.service';

@Component({
  selector: 'add-reservaComp',
  templateUrl: './add-reserva.component.html',
  styleUrls: ['./add-reserva.component.css']
})
export class AddReservaComponent implements OnInit {
  @Input() reservasTotales: ReservaType[] = []
  modalRef!: BsModalRef;

  fechaSelected!: Date
  minDate: Date = new Date()
  maxDate!: Date
  minTime: Date = new Date()
  maxTime: Date = new Date()
  valid = true

  espaciosFisicos: EspacioFisicoType[] = []
  espacioFisicoSelected!: EspacioFisicoType
  reglaEspacioFSelected!: ReglaType

  reservasXUsu: ReservaType[] = []
  usuario!: Usuario
  newReserva: ReservaType = {
    id_usuario: this.AuthService.getCurrentUser().documento,
    id_operario: 2,
    id_espacioFisico: 0,
    activa: 1,
    vencida: 0,
    fechaHora_realizada: this.minTime,
    fecha_reservar: this.minTime,
    hora_reservar: this.minTime,
    hora_finalReservar: this.minTime
  }

  constructor(
    private espaciosFisicosService: EspaciosFisicosService,
    private reglasService: ReglasService,
    private reservasService: ReservasService,
    private AuthService: AuthService,
    private modalService: BsModalService,
    private toastService: ToastService,
    private utils: Utils,
  ) { }
  ngOnInit() {
    this.usuario = this.AuthService.getCurrentUser()
    this.espaciosFisicosService.getEspaciosFisicos().subscribe((data) => {
      this.espaciosFisicos = data
    })
    this.getReservas()
    this.usuario = this.AuthService.getCurrentUser()
    //inicializacion fecha
    this.minDate.setDate(this.utils.getCurrentDate().getDate())//+1
    //inicializacion horas
    this.newReserva.hora_reservar = this.minTime
    //
    this.minTime.setHours(6)
    this.minTime.setMinutes(30)
    this.maxTime.setHours(21)
    this.maxTime.setMinutes(0)

  }
  receiveData(data: EspacioFisicoType) {
    this.espacioFisicoSelected = data
    this.reglasService.getRegla(String(this.espacioFisicoSelected.id_regla)).subscribe((data) => {
      this.reglaEspacioFSelected = data
      console.log(this.reglaEspacioFSelected)
      this.calcularHoraFin()
    })
    this.modalRef?.hide()
    console.log(this.espacioFisicoSelected)
    this.toastService.show('Mensaje', 'Espacio Fisico Seleccionado')
  }
  getReservas() {
    this.reservasService.getReservas(this.usuario.documento, "ByUser").subscribe((data) => {
      this.reservasXUsu = data
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  isValid(event: boolean) {
    this.valid = event
  }
  calcularHoraFin() {
    let finTime: Date = new Date(this.newReserva.hora_reservar)
    finTime.setHours(this.newReserva.hora_reservar.getHours() + this.reglaEspacioFSelected.horas_uso)
    this.newReserva.hora_finalReservar = finTime
  }
  puedeReservar() {
    let reverseReservas = this.reservasXUsu.reverse()
    let puedeReservar = true
    reverseReservas.map((reserva) => {
      if (reserva.id_espacioFisico == this.espacioFisicoSelected.id && reserva.vencida != 1) {
        let fechaAux = new Date(reserva.fechaHora_realizada)//fecha de realizacion + tiempo de espera
        let fechaRealizada = new Date(reserva.fechaHora_realizada)
        let fechadeReserva =new Date(reserva.fecha_reservar)//dia de la reserva
        fechaAux.setHours(fechaAux.getHours() + this.reglaEspacioFSelected.horas_nueva_reserva)
        // console.log("fechaAux:", fechaAux, "HoraRealziada:", fechaRealizada)
        if (fechadeReserva.getDay() == this.newReserva.fecha_reservar.getDay()) {
          if (fechaRealizada.getHours() < fechaAux.getHours()) puedeReservar = !puedeReservar
        }
      }
    })
    return puedeReservar
  }

  Reservar(idEf: any) {//toca agregar el id del espacio aca
    this.newReserva.fechaHora_realizada = this.utils.getCurrentDate()
    this.newReserva.id_espacioFisico = idEf
    this.newReserva.fecha_reservar = this.fechaSelected
    // console.log(this.newReserva)
    let aforoValido = this.utils.comporbarAforo(this.reservasTotales, this.espacioFisicoSelected.aforo)
    let puedeReservar = this.puedeReservar()
    if (!aforoValido) this.toastService.show('Mensaje', 'El aforo maximo para este Espacio Fisico se ha alcanzado')
    else if (!puedeReservar) {
      this.toastService.show('Mensaje', 'Debes esperar para poder reservar este espacio Fisico')
    } else {
      this.reservasService.addReserva(this.newReserva).subscribe((res) => {
        this.toastService.show('Mensaje', res.message)
        this.getReservas()
      })
    }
  }
}
