import { Component,Input } from '@angular/core';

@Component({
  selector: 'list-opcionesComp',
  templateUrl: './list-opciones.component.html',
  styleUrls: ['./list-opciones.component.css']
})
export class ListOpcionesComponent {
  @Input() listaOpciones:any[] = []
}
