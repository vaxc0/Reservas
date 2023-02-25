import { Component, Input } from '@angular/core';
import { AcordeonType } from 'src/app/core/data/interfaces/ui/acordeonType.interface';

@Component({
  selector: 'acordeonComp',
  templateUrl: './acordeon.component.html'
})
export class AcordeonComponent {
  @Input() groups!: Array<AcordeonType> ;

}
