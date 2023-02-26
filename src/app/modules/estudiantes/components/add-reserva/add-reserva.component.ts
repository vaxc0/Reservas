import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReservaType } from 'src/app/core/data/interfaces/reservaType.interface';
import { EspacioFisico } from 'src/app/core/data/models/espacio-fisico.model';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { ReservasService } from 'src/app/core/services/reservas.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';

@Component({
  selector: 'add-reservaComp',
  templateUrl: './add-reserva.component.html',
  styleUrls: ['./add-reserva.component.css']
})
export class AddReservaComponent implements OnInit {
  modalRef?: BsModalRef;

  espaciosFisicos: EspacioFisico[] = []
  reservas: ReservaType[] = []
  usuario!: Usuario

  constructor(
    private espaciosFisicosService: EspaciosFisicosService,
    private reservasService: ReservasService,
    private AuthService: AuthService,
    private modalService: BsModalService
  ) { }
  ngOnInit() {
    this.usuario = this.AuthService.getCurrentUser()
    this.espaciosFisicosService.getEspaciosFisicos().subscribe((data) => {
      this.espaciosFisicos = data
    })
    this.getReservas()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getReservas() {
    this.reservasService.getReservas(this.usuario.documento).subscribe((data)=>{
      this.reservas = data
    })
  }
}
