import { Time } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { ReservaType } from 'src/app/core/data/interfaces/ui/reservaType.interface';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { ReservasService } from 'src/app/core/services/reservas.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Utils } from 'src/app/core/shared/utils/utils';
import { AuthService } from 'src/app/modules/auth/service/auth.service';

@Component({
  selector: 'add-reservaComp',
  templateUrl: './add-reserva.component.html',
  styleUrls: ['./add-reserva.component.css']
})
export class AddReservaComponent implements OnInit {
  modalRef!: BsModalRef;

  espaciosFisicos: EspacioFisicoType[] = []
  espacioFisicoSelected!: EspacioFisicoType

  reservas: ReservaType[] = []
  usuario!: Usuario
  newReserva: ReservaType = {
    id_usuario: this.AuthService.getCurrentUser().documento,
    id_operario:2,
    id_espacioFisico: 0,
    activa: 1,
    vencida: 0,
    fecha_realizada: '',
    hora_realizada: '',
    fecha_reservar: 'any',
    hora_reservar: 'any',
    hora_finalReservar: 'any'
  }

  fecha_hora_realizada!: Date
  fecha_hora_reserva!: Date
  horaFinal!: Time

  constructor(
    private espaciosFisicosService: EspaciosFisicosService,
    private reservasService: ReservasService,
    private AuthService: AuthService,
    private modalService: BsModalService,
    private toastService: ToastService,
    private utils:Utils,
  ) { }
  ngOnInit() {
    this.usuario = this.AuthService.getCurrentUser()
    this.espaciosFisicosService.getEspaciosFisicos().subscribe((data) => {
      this.espaciosFisicos = data
    })
    this.getReservas()
    this.usuario = this.AuthService.getCurrentUser()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  verificarTiempo(){
    let reverseReservas =this.reservas.reverse()
    let puedeReservar = true
     let ultimarerservaEF = reverseReservas.map((reserva)=>{
      if(reserva.id_espacioFisico == this.espacioFisicoSelected.id) return reserva;
      else return
      // console.log(reserva)
    })
    console.log(ultimarerservaEF[0])
    
  }
  receiveData(data: EspacioFisicoType) {
    this.espacioFisicoSelected = data
    this.modalRef?.hide()
    console.log(this.espacioFisicoSelected)
    this.onCloseModal()
  }
  onCloseModal() {
    this.toastService.show('Mensaje', 'Espacio Fisico Seleccionado')
  }
  getReservas() {
    this.reservasService.getReservas(this.usuario.documento,"ByUser").subscribe((data) => {
      this.reservas = data
    })
  }
  Reservar(idEf:any) {//toca agregar el id del espacio aca
    this.newReserva.fecha_realizada = this.utils.getCurrentDate()
    this.newReserva.hora_realizada = this.utils.getCurrentTime()
    this.newReserva.id_espacioFisico = idEf
    // console.log(this.newReserva)
    this.reservasService.addReserva(this.newReserva).subscribe((res)=>{
      this.toastService.show('Mensaje', res.message)
      this.getReservas()
    })
    
  }
}
