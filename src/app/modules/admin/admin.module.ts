import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.component";
import { AdminComponent } from './pages/admin.component';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { EspaciosFisicosComponent } from './pages/espacios-fisicos/espacios-fisicos.component';
import { VisualizarReservasComponent } from './pages/visualizar-reservas/visualizar-reservas.component';
import { AuthModule } from "../auth/auth.module";
import { GestionReglasComponent } from './pages/gestion-reglas/gestion-reglas.component';
import { ListaReglasComponent } from './components/lista-reglas/lista-reglas.component';

@NgModule({
    declarations: [
        AdminComponent,
        EspaciosFisicosComponent,
        VisualizarReservasComponent,
        GestionReglasComponent,
        ListaReglasComponent,
    ],
    exports: [],
    providers: [],
    imports: [
        AdminRoutingModule,
        SharedModule,
        SideMenuComponent,
        AuthModule,
    ]
})

export class AdminModule {
    constructor() { }
}