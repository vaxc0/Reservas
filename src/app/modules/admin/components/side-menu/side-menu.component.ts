import { Component, Input } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'src/app/constants/constants';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { canvasContent } from './side-menu-content/smenu-content.component';
import { ROLES } from 'src/app/constants/roles-guard';
import { OpcionesType } from 'src/app/core/data/interfaces/ui/opcionesType.interface';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  standalone: true,
})
export class SideMenuComponent {
  opcionesSideMenu!:OpcionesType[]

  constructor(private offcanvasService: NgbOffcanvas,
    private authService:AuthService
    ) { }

  open() {//declaracion de parametros
    let rolUser = this.authService.getRolUser()
    if(rolUser == ROLES.ADMIN) this.opcionesSideMenu = Constants.opcionesAdministracion
    else if(rolUser == ROLES.OPERARIO)this.opcionesSideMenu =Constants.opcionesOperario
    const offcanvasRef = this.offcanvasService.open(canvasContent,{ panelClass: 'custom-panel'});//css en las globals
    offcanvasRef.componentInstance.listaOpsAd = this.opcionesSideMenu ;
    offcanvasRef.componentInstance.titulo = 'Panel de Administración';
  }
}


