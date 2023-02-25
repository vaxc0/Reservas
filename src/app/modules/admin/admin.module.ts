import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.component";
import { AdminComponent } from './pages/admin.component';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { EspaciosFisicosComponent } from './pages/espacios-fisicos/espacios-fisicos.component';
import { EstablecerReglasComponent } from './pages/establecer-reglas/establecer-reglas.component';
import { VisualizarReservasComponent } from './pages/visualizar-reservas/visualizar-reservas.component';
import { AsignacionManualComponent } from './pages/asignacion-manual/asignacion-manual.component';
import { AuthModule } from "../auth/auth.module";

@NgModule({
    declarations: [
        AdminComponent,
        EspaciosFisicosComponent,
        EstablecerReglasComponent,
        VisualizarReservasComponent,
        AsignacionManualComponent
    ],
    exports: [],
    providers: [],
    imports: [
        AdminRoutingModule,
        SharedModule,
        SideMenuComponent,
        AuthModule
    ]
})

export class AdminModule {
    constructor() { }
}