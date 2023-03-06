import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReglaType } from 'src/app/core/data/interfaces/ui/reglaType.interface';

@Component({
  selector: 'lista-reglasComp',
  templateUrl: './lista-reglas.component.html',
  styleUrls: ['./lista-reglas.component.css']
})
export class ListaReglasComponent {
  @Input() Reglas: ReglaType[] = []
  @Output() dataSend = new EventEmitter<ReglaType>()

  constructor() { }

  sendDataPadre(data: ReglaType) {
    this.dataSend.emit(data)
  }
}
