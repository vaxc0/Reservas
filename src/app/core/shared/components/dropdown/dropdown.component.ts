import { Component, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'dropdownComponent',
  templateUrl: './dropdown.component.html',
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class DropdownComponent {
  @Input() textoBtn: string = ''
  @Input() arrayOpciones:Array<any> = []
}
//queda en desarollo