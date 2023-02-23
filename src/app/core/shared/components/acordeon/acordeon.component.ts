import { Component, Input } from '@angular/core';
import { AcordeonType } from 'src/app/core/data/models/AcordeonType.model';

@Component({
  selector: 'acordeonComp',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent {
  
  @Input() groups!: Array<AcordeonType> ;

}
