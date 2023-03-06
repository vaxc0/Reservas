import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { EspacioFisicoType } from 'src/app/core/data/interfaces/espacioFisicoType.interface';;

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
  @Output() dataSend = new EventEmitter<EspacioFisicoType>()

  constructor() { }

  sendDataPadre(data: EspacioFisicoType) {
    this.dataSend.emit(data)
  }
}
