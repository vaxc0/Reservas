import { Component, Input } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'src/app/constants/constants';
import { canvasContent } from './side-menu-content/smenu-content.component';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  standalone: true,
})
export class SideMenuComponent {

  constructor(private offcanvasService: NgbOffcanvas) { }

  open() {//declaracion de parametros
    const offcanvasRef = this.offcanvasService.open(canvasContent,{ panelClass: 'custom-panel'});//css en las globals
    offcanvasRef.componentInstance.listaOpsAd = Constants.opcionesAdministracion ;
    offcanvasRef.componentInstance.titulo = 'Panel de Administración';
  }
}


