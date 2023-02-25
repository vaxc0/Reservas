import { Component } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { AcordeonType } from 'src/app/core/data/interfaces/ui/acordeonType.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  TextosGalileo: AcordeonType[] = Constants.textosAdmin
  TextosGenesis: AcordeonType[] = Constants.textosEstudiante
}