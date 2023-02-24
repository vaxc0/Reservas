import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public dataPortal: any = {}

  constructor(
    private registerComponent: RegisterComponent,//importe del hijo para enviar data
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let portal
    this.route.paramMap.subscribe(params => {
      portal = params.get('portal')
    })
    if (portal == 'galileo') this.dataPortal['nombre'] = "Galileo"
    else if (portal == 'genesis') this.dataPortal['nombre'] = "Genesis"
    this.sendData()
  }

  sendData() {//envia informacion a un hijo
    this.registerComponent.bindData(this.dataPortal)
  }
}
