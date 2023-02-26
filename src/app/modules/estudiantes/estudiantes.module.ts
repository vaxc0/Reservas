import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AuthModule } from "../auth/auth.module";
import { EstudiantesRoutingModule } from "./estudiantes-routing-module";
import { EstudiantesComponent } from './pages/estudiantes.component';
import { AddReservaComponent } from './components/add-reserva/add-reserva.component';

@NgModule({
    imports:[
      EstudiantesRoutingModule,
      SharedModule,
      AuthModule,
    ],
    declarations:[
    EstudiantesComponent,
    AddReservaComponent
  ],
    exports:[],
    providers:[]
})

export class EstudiantesModule{
    constructor(){}
}