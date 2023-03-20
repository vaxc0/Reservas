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
import { interval } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  modalRef!: BsModalRef;
  intervalo = interval(30000)//evalua cada 30 segundos 
  nombre: string = 'Dev V4x'
  usuario!: Usuario
  textosEstudiante: AcordeonType[] = Constants.textosEstudiante
  reservasTotales: any = []
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
    //
    this.getReservas()
    this.getReservasTotales()
    //
    this.intervalo.subscribe(() => {
      let reservasMod = this.utils.verificarVencida(this.reservasTotales)
      console.log(reservasMod)
      if (reservasMod.length != 0) {
        reservasMod.map((reservaM) => {
          this.reservasService.updateReserva(reservaM, String(reservaM.id)).subscribe(() => {
            this.getReservasTotales()
          })
        })
      }
    })
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
  getReservasTotales() {
    this.reservasService.getReservas().subscribe((data) => {
      this.reservasTotales = data
      // console.log("reservas totales", this.reservasTotales)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    if (this.modalRef?.onHide) {
      this.onCloseModal()
    }
  }
  cancelarReserva() {
    this.reservasService.deleteReserva(String(this.reservaSelected.id)).subscribe((res) => {
      this.toastService.show('Mensaje', res.message)
      this.getReservas()
    })
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
