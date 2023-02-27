import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BloqueType } from 'src/app/core/data/interfaces/bloque.interface';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';
import { FacultadType } from 'src/app/core/data/interfaces/facultad.inteface';
import { TipoType } from 'src/app/core/data/interfaces/tipoType.interface';

@Component({
  selector: 'lista-espaciosf',
  templateUrl: './lista-espaciosf.component.html',
  styleUrls: ['./lista-espaciosf.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ListaEspaciosfComponent {
  @Input() vistaEstudiante: boolean = false
  @Input() espaciosFisicos: EspacioFisicoType[] = []
  @Input() facultades: FacultadType[] = []
  @Input() bloques: BloqueType[] = []
  @Input() tipos: TipoType[] = []
  @Output() dataSend = new EventEmitter<EspacioFisicoType>()

  constructor() { }

  sendDataPadre(data: EspacioFisicoType) {
    this.dataSend.emit(data)
  }
}
