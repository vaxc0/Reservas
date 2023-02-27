import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Constants } from 'src/app/constants/constants';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { AcordeonType } from 'src/app/core/data/interfaces/ui/acordeonType.interface';
import { ReservaType } from 'src/app/core/data/interfaces/ui/reservaType.interface';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { ReservasService } from 'src/app/core/services/reservas.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from '../../auth/service/auth.service';
import { EspaciosFisicosService } from './../../../core/services/espaciosFisicos.service';
import { Utils } from 'src/app/core/shared/utils/utils';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  modalRef!: BsModalRef;
  nombre: string = 'Dev V4x'
  usuario!: Usuario
  textosEstudiante: AcordeonType[] = Constants.textosEstudiante
  reservasUsuario: ReservaType[] = []
  reservaSelected!: ReservaType
  
  espacionFisicoDeReserva: EspacioFisicoType[] = []

  constructor(
    private reservasService: ReservasService,
    private authService: AuthService,
    private modalService: BsModalService,
    private toastService: ToastService,
    private espaciosFisicosService: EspaciosFisicosService,
    private utils: Utils
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getCurrentUser()
    if (this.usuario.nombre != undefined) this.nombre = this.usuario.nombre
    this.getReservas()
  }
  logOut() {
    this.authService.loggOut()
  }
  getReservas() {
    this.reservasService.getReservas(this.usuario.documento, "ByUser").subscribe((data) => {
      this.reservasUsuario = data
      // console.log(this.reservasUsuario)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    if (this.modalRef?.onHide) {
      this.onCloseModal()
    }
  }
  cancelarReserva() {
    let horaActual = this.utils.getCurrentTime()
    let fechaActual = this.utils.getCurrentDate()
    let fechaReservaFormated = this.utils.getFormatDate(this.reservaSelected.fecha_reservar)
    let fechavencida = this.utils.fechaEstaVencida(fechaActual, fechaReservaFormated)
    let hrvencida = this.utils.horaEstaVencida(horaActual, this.reservaSelected.hora_finalReservar)
    if (fechavencida&&hrvencida) {
      this.reservasService.deleteReserva(String(this.reservaSelected.id)).subscribe((res)=>{
        this.toastService.show('Mensaje', res.message)
        this.getReservas()
      })
    }else {
      this.toastService.show('Mensaje', 'No puedes cancelar la reserva Seleccionada')
      this.reservaSelected.vencida = 1
      this.reservaSelected.activa = 0
      this.reservasService.updateReserva(this.reservaSelected,String(this.reservaSelected.id)).subscribe((res)=>{
        this.toastService.show('Mensaje', res.message)
      })
    }
  }
  onCloseModal() {
    this.espacionFisicoDeReserva.pop()
  }
  receiveData(data: ReservaType, template: TemplateRef<any>) {
    this.openModal(template)
    this.toastService.show('Mensaje', 'Reserva Seleccionada')
    this.reservaSelected = data
    this.espaciosFisicosService.getEspacioFisico(String(this.reservaSelected.id_espacioFisico)).subscribe((data) => {
      this.espacionFisicoDeReserva.push(data)
    })
    // this.modalRef?.hide()
    console.log(this.reservaSelected)
    // this.onCloseModal()
  }
}
