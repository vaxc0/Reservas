import { Component, Injectable, Input, Output } from '@angular/core';
import { BloqueType } from 'src/app/core/data/interfaces/bloque.interface';
import { FacultadType } from 'src/app/core/data/interfaces/facultad.inteface';
import { TipoType } from 'src/app/core/data/interfaces/tipoType.interface';
import { EspacioFisico } from 'src/app/core/data/models/espacio-fisico.model';

@Component({
  selector: 'lista-espaciosf',
  templateUrl: './lista-espaciosf.component.html',
  styleUrls: ['./lista-espaciosf.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ListaEspaciosfComponent {
  @Input() vistaReglas: boolean = false
  @Input() espaciosFisicos: EspacioFisico[] = []
  @Output()

  bloques: BloqueType[] = []
  facultades: FacultadType[] = []
  tipos: TipoType[] = []
  espacioFSelected!: EspacioFisico

  constructor() { }
  bindData(data: { bloques: BloqueType[], facultades: FacultadType[], tipos: TipoType[] }) {
    this.bloques = data.bloques
    this.facultades = data.facultades
    this.tipos = data.tipos
  }
  mensaje(fila: any) {
    console.log("fila presionada", fila)
  }
  BuscarTipo(idTipo: any) {
    let Tipo!:TipoType
    this.tipos.map((tipo) => {
      if (idTipo == tipo.id) Tipo = tipo
    })
    return Tipo.nombre
  }
}
