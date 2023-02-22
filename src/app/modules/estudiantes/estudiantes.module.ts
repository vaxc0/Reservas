import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { EstudiantesRoutingModule } from "./estudiantes-routing-module";
import { EstudiantesComponent } from './pages/estudiantes.component';

@NgModule({
    imports:[
      EstudiantesRoutingModule,
      SharedModule,
      
    ],
    declarations:[
    EstudiantesComponent
  ],
    exports:[],
    providers:[]
})

export class EstudiantesModule{
    constructor(){}
}