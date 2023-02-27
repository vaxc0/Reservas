import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { ReservaType } from 'src/app/core/data/interfaces/ui/reservaType.interface';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { ReservasService } from 'src/app/core/services/reservas.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';

@Component({
  selector: 'app-visualizar-reservas',
  templateUrl: './visualizar-reservas.component.html',
  styleUrls: ['./visualizar-reservas.component.css']
})
export class VisualizarReservasComponent implements OnInit {
  modalRef!: BsModalRef;
  usuario!: Usuario
  reservasTotales: ReservaType[] = []
  reservasByOperario: ReservaType[] = []

  reservaSelected!: ReservaType
  espacioFisicoSelected: EspacioFisicoType[] = []

  constructor(
    private reservasService: ReservasService,
    private usuariosService: UsuariosService,
    private authService: AuthService,
    private modalService: BsModalService,
    private toastService: ToastService,
    private espaciosFisicosService: EspaciosFisicosService
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getCurrentUser()
    this.reservasService.getReservas().subscribe((data) => {
      this.reservasTotales = data
      console.log(this.reservasTotales)
    })
    this.reservasService.getReservas(this.usuario.documento, "ByOper").subscribe((data) => {
      this.reservasByOperario = data
      console.log(this.reservasByOperario)
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    if (this.modalRef?.onHide) {
      this.onCloseModal()
    }
  }
  onCloseModal() {
    this.espacioFisicoSelected.pop()
  }
  receiveData(data: ReservaType, template: TemplateRef<any>) {
    this.openModal(template)
    this.toastService.show('Mensaje', 'Reserva Seleccionada')
    this.reservaSelected = data
    this.espaciosFisicosService.getEspacioFisico(String(this.reservaSelected.id_espacioFisico)).subscribe((data) => {
      this.espacioFisicoSelected.push(data)
    })
    // this.modalRef?.hide()
    if (this.reservaSelected.activa == 1 && this.reservaSelected)
      console.log(this.reservaSelected)
  }
}
