import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReservaType } from 'src/app/core/data/interfaces/ui/reservaType.interface';

@Component({
  selector: 'lista-reservasComp',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit {
  @Input() vistaEdicion: boolean = false
  @Input() reservas:ReservaType[]= []
  @Output() dataSend = new EventEmitter<ReservaType>()

  constructor() {}
  ngOnInit() {
  }

  sendDataPadre(data: ReservaType) {
    this.dataSend.emit(data)
  }
}
