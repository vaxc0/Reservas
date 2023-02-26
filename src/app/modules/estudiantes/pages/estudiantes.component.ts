import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { AcordeonType } from 'src/app/core/data/interfaces/ui/acordeonType.interface';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  nombre: string = 'Dev V4x'
  textosEstudiante: AcordeonType[] = Constants.textosEstudiante

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
