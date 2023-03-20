import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { ReglaType } from 'src/app/core/data/interfaces/ui/reglaType.interface';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { ReglasService } from 'src/app/core/services/reglas.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-gestion-reglas',
  templateUrl: './gestion-reglas.component.html',
  styleUrls: ['./gestion-reglas.component.css']
})
export class GestionReglasComponent implements OnInit {
  modalRef!: BsModalRef;

  newRegla: ReglaType = {
    horas_uso: 0,
    horas_nueva_reserva: 0,
    tiempo_espera: 0,
    camposVacios: true
  }
  Reglas: ReglaType[] = []
  reglaSelected: ReglaType[] = []
  EspaciosFisicos: EspacioFisicoType[] = []
  espacioFSelected: EspacioFisicoType[] = []
  espaciosFxRegla: EspacioFisicoType[] = []

  constructor(
    private reglasService: ReglasService,
    private espaciosFisicosService: EspaciosFisicosService,
    private toastService: ToastService,
    private modalService: BsModalService,
  ) { }
  ngOnInit() {
    this.reglasService.getReglas().subscribe((data) => {
      this.Reglas = data
    })
    this.espaciosFisicosService.getEspaciosFisicos().subscribe((data) => {
      this.EspaciosFisicos = data
    })
  }

  AgregarRegla() {
    this.reglasService.addRegla(this.newRegla).subscribe((res) => {
      this.toastService.show('Mensaje', res.message)
    })
  }
  AsignarRegla() {
    this.espacioFSelected[0].id_regla = this.reglaSelected[0].id
    this.espaciosFisicosService.updateEspacioFisico(this.espacioFSelected[0], String(this.espacioFSelected[0].id))
      .subscribe((res) => {
        this.toastService.show('Mensaje', res.message)
      })
  }
  comprobar() {
    if (
      this.newRegla.horas_uso != 0 &&
      this.newRegla.horas_nueva_reserva != 0 &&
      this.newRegla.tiempo_espera != 0
    ) this.newRegla.camposVacios = false
  }
  //modales
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //recibir data
  receiveDataRegla(data: ReglaType) {//recibe la data de la tabla
    this.reglaSelected.pop()
    this.toastService.show('Mensaje', 'Regla Seleccionada')
    this.reglaSelected.push(data)
    console.log(this.reglaSelected)
    this.modalRef?.hide()
  }
  receiveDataEspF(data: EspacioFisicoType) {//recibe la data de la tabla
    this.espacioFSelected.pop()
    this.toastService.show('Mensaje', 'Espacio Fisico Seleccionado')
    this.espacioFSelected.push(data)
    console.log(this.espacioFSelected)
    this.modalRef?.hide()
  }
  receiveDataReglaxEspF(data: ReglaType, template: TemplateRef<any>) {
    this.openModal(template)
    this.toastService.show('Mensaje', 'Espacios Fisicos relacionados a la Regla')
    this.espaciosFisicosService.getEspaciosFisicos('ByRegla', data.id)
      .subscribe((data) => {
        this.espaciosFxRegla = data
        // console.log(this.espaciosFxRegla)
      })
  }
}