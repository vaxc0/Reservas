import { Component, Input } from '@angular/core';
import { OpcionesType } from 'src/app/core/data/interfaces/ui/opcionesType.interface';

@Component({
  selector: 'list-opcionesComp',
  templateUrl: './list-opciones.component.html',
  styleUrls: ['./list-opciones.component.css']
})
export class ListOpcionesComponent {
  @Input() listaOpciones: OpcionesType[] = []
}
