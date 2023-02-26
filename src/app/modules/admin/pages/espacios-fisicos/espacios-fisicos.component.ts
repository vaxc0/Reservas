import { Component, OnInit } from '@angular/core';
import { BloqueType } from 'src/app/core/data/interfaces/bloque.interface';
import { FacultadType } from 'src/app/core/data/interfaces/facultad.inteface';
import { TipoType } from 'src/app/core/data/interfaces/tipoType.interface';
import { EspacioFisico } from 'src/app/core/data/models/espacio-fisico.model';
import { BloquesService } from 'src/app/core/services/bloque.service';
import { EspaciosFisicosService } from 'src/app/core/services/espaciosFisicos.service';
import { FacultadesService } from 'src/app/core/services/facultad.service';
import { TiposService } from 'src/app/core/services/tipo.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ListaEspaciosfComponent } from 'src/app/core/shared/components/lista-espaciosf/lista-espaciosf.component';

@Component({
  selector: 'app-espacios-fisicos',
  templateUrl: './espacios-fisicos.component.html',
  styleUrls: ['./espacios-fisicos.component.css']
})
export class EspaciosFisicosComponent implements OnInit {
  espaciosFisicos: EspacioFisico[] = []
  bloques: BloqueType[] = []
  facultades: FacultadType[] = []
  tipos: TipoType[] = []

  tipoSelected: TipoType = {
    id: 0,
    nombre: '',
    min: 0,
    max: 0
  }
  bloqueSelected!: BloqueType
  facultadSelected!: FacultadType

  newEspacioFisico: EspacioFisico = {
    facultad: '',
    bloque: '',
    tipo: '',
    nombre: '',
    aforo: 0,
    reservable: false,
    reservado: false
  }

  constructor(
    private espaciosFisicosService: EspaciosFisicosService,
    private bloquesService: BloquesService,
    private facultadesService: FacultadesService,
    private tiposService: TiposService,
    private toastServicee:ToastService,
    private listaEspaciosFisicos:ListaEspaciosfComponent
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
    this.sendData()//manda la info a la lista
  }

  getEspacios() {
    this.espaciosFisicosService.getEspaciosFisicos().subscribe((data) => {
      this.espaciosFisicos = data
    })
    // console.log(this.espaciosFisicos,this.bloques,this.facultades,this.tipos)
  }
  Agregar() {
    this.espaciosFisicosService.addEspacioFisico(this.newEspacioFisico).subscribe((res) => {
      this.toastServicee.show('Mensaje',res.message)
      this.getEspacios()
    })
  }
  onSelectFacultad(event: any) {
    // this.facultadSelected = this.facultades[event.target.value - 1]
    this.newEspacioFisico.facultad = event.target.value 
  }
  onSelectBloque(event: any) {
    // this.bloqueSelected = this.bloques[event.target.value - 1]
    this.newEspacioFisico.bloque = event.target.value 
  }
  onSelectTipo(event: any) {
    this.tipos.map((tipo)=>{
      if(event.target.value == tipo.nombre) this.tipoSelected = tipo
    })
    this.newEspacioFisico.tipo = event.target.value 
  }
  sendData() {//envia informacion a un hijo
    this.listaEspaciosFisicos.bindData({facultades:this.facultades,bloques:this.bloques,tipos:this.tipos})
  }
}
