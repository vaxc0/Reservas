import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { AcordeonType } from 'src/app/core/data/interfaces/ui/acordeonType.interface';
import { OpcionesType } from 'src/app/core/data/interfaces/ui/opcionesType.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @Input() nombre: string = 'Dev V4x'
  @Input() listRutasNav: OpcionesType[] = Constants.rutasNavAdmin
  @Input() textosAdmin: AcordeonType[] = Constants.textosAdmin
  opsDropdown = Constants.dropdown

  constructor() { }

  ngOnInit() {

  }
}
