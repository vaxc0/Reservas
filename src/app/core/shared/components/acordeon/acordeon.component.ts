import { Component, Input } from '@angular/core';
import { AcordeonType } from 'src/app/core/data/interfaces/acordeonType.interface';

@Component({
  selector: 'acordeonComp',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent {
  
  @Input() groups!: Array<AcordeonType> ;

}
