import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BloqueType } from 'src/app/core/data/interfaces/bloque.interface';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { FacultadType } from 'src/app/core/data/interfaces/facultad.inteface';
import { TipoType } from 'src/app/core/data/interfaces/tipoType.interface';
import { BloquesService } from 'src/app/core/services/bloque.service';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { FacultadesService } from 'src/app/core/services/facultad.service';
import { TiposService } from 'src/app/core/services/tipo.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-espacios-fisicos',
  templateUrl: './espacios-fisicos.component.html',
  styleUrls: ['./espacios-fisicos.component.css']
})
export class EspaciosFisicosComponent implements OnInit {
  isOpenAcord = false
  modalRef!: BsModalRef;

  espaciosFisicos: EspacioFisicoType[] = []
  bloques: BloqueType[] = []
  facultades: FacultadType[] = []
  tipos: TipoType[] = []
  Edit = false

  tipoSelected: TipoType = {
    id: 0,
    nombre: '',
    min: 0,
    max: 0
  }
  bloqueSelected!: BloqueType
  facultadSelected!: FacultadType

  newEspacioFisico: EspacioFisicoType = {
    id: 0,
    facultad: '',
    bloque: '',
    tipo: '',
    nombre: '',
    aforo: 0,
    reservable: 1,
    reservado: 0,
    horas_uso: '00:00',
    horas_nueva_reserva: '00:00',
    tiempo_espera: '00',
  }

  BackEspacioFisico: EspacioFisicoType = {
    id: 0,
    facultad: '',
    bloque: '',
    tipo: '',
    nombre: '',
    aforo: 0,
    reservable: 1,
    reservado: 0,
    horas_uso: '00:00',
    horas_nueva_reserva: '00:00',
    tiempo_espera: '00',
  }


  constructor(
    private espaciosFisicosService: EspaciosFisicosService,
    private bloquesService: BloquesService,
    private facultadesService: FacultadesService,
    private tiposService: TiposService,
    private toastServicee: ToastService
  ) { }

  ngOnInit() {
    this.getEspacios()
    this.bloquesService.getBloques().subscribe((data) => {
      this.bloques = data
    })
    this.facultadesService.getFacultades().subscribe((data) => {
      this.facultades = data
    })
    this.tiposService.getTipos().subscribe((data) => {
      this.tipos = data
    })
  }

  getEspacios() {
    this.espaciosFisicosService.getEspaciosFisicos().subscribe((data) => {
      this.espaciosFisicos = data
    })
    // console.log(this.espaciosFisicos,this.bloques,this.facultades,this.tipos)
  }
  Agregar() {
    this.espaciosFisicosService.addEspacioFisico(this.newEspacioFisico).subscribe((res) => {
      this.toastServicee.show('Mensaje', res.message)
      this.getEspacios()
    })
  }
  Editar(idEspFis: any) {
    this.espaciosFisicosService.updateEspacioFisico(this.newEspacioFisico, idEspFis)
      .subscribe((res) => {
        this.resetEdit(res)
      })
  }
  Eliminar(idEspFis: any){
    this.espaciosFisicosService.deleteEspacioFisico(idEspFis).subscribe((res)=>{
      this.resetEdit(res)
    })
  }
  resetEdit(res:any){
    this.toastServicee.show('Mensaje', res.message)
    this.Edit = false
    this.newEspacioFisico = this.BackEspacioFisico
    this.getEspacios()
  }

  //metodos de seleccion de options
  onSelectFacultad(event: any) {
    this.newEspacioFisico.facultad = event.target.value
  }
  onSelectBloque(event: any) {
    this.newEspacioFisico.bloque = event.target.value
  }
  onSelectTipo(event: any) {
    this.tipos.map((tipo) => {
      if (event.target.value == tipo.nombre) this.tipoSelected = tipo
    })
    this.newEspacioFisico.tipo = event.target.value
  }
  //metodos para formato de hora
  getPart(hora: string, parteDeseada: string): any {//horas = H, minutos = M
    let [horas, minutos] = hora.split(':')
    if (parteDeseada == 'H') return horas
    else if (parteDeseada == 'M') return minutos
  }
  getTiempoespera(event: any) {
    let hora = event.target.value
    this.newEspacioFisico.tiempo_espera = this.getPart(hora, 'M')
  }
  //metodo para recibir data de la tabla
  receiveData(data: EspacioFisicoType) {//recibe la data de la tabla
    this.Edit = true
    this.newEspacioFisico = data
    console.log(this.newEspacioFisico)
  }

}
