import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { AcordeonType } from 'src/app/core/data/interfaces/ui/acordeonType.interface';
import { OpcionesType } from 'src/app/core/data/interfaces/ui/opcionesType.interface';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  nombre: string = 'Dev V4x'
  listRutasNav: OpcionesType[] = Constants.rutasNavAdmin
  textosAdmin: AcordeonType[] = Constants.textosAdmin
  opsDropdown = Constants.dropdown

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    let userName = this.authService.getCurrentUser().nombre
    if (userName != undefined) this.nombre = userName
  }
  logOut() {
    this.authService.loggOut()
  }
}
