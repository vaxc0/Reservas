import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";
//components
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
//ngx
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//ngb
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
//services
import { RolesService } from "../services/roles.service";
import { UsuariosService } from "../services/usuarios.service";
import { EspaciosFisicosService } from "../services/espaciosFisicos.service";
import { BloquesService } from "../services/bloques.service";
import { FacultadesService } from "../services/facultades.service";
import { TiposService } from "../services/tipos.service";
import { ListOpcionesComponent } from './components/list-opciones/list-opciones.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { ToastComponent } from './components/toast/toast.component';
import { NgbToast } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../services/toast.service";
import { ListaEspaciosfComponent } from './components/lista-espaciosf/lista-espaciosf.component';
import { ReservasService } from "../services/reservas.service";
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard, RoleGuard } from "../guards";
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { ReglasService } from "../services/reglas.service";

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        CommonModule,
        AccordionModule,
        BsDropdownModule,
        TypeaheadModule,
        FormsModule,
        TimepickerModule.forRoot(),
        BsDatepickerModule,
        NgbToast,
        NgbModalModule,
        ModalModule.forRoot()
    ],
    declarations: [
        NotFoundComponent,
        AcordeonComponent,
        DropdownComponent,
        ListOpcionesComponent,
        PerfilComponent,
        ToastComponent,
        ListaEspaciosfComponent,
        ListaReservasComponent,
    ],
    exports: [
        HttpClientModule,
        RouterModule,
        CommonModule,
        FormsModule,
        BsDatepickerModule,
        // BrowserAnimationsModule,
        NotFoundComponent,
        AcordeonComponent,
        DropdownComponent,
        PerfilComponent,
        ListOpcionesComponent,
        ListaEspaciosfComponent,
        ListaReservasComponent,
        ToastComponent,
        NgbToast,
        NgbModule,
        AccordionModule,
        BsDropdownModule,
        TypeaheadModule,
        ModalModule,
        TimepickerModule
    ],
    providers: [//servicios
        RolesService,
        UsuariosService,
        EspaciosFisicosService,
        BloquesService,
        FacultadesService,
        TiposService,
        ToastService,
        ReservasService,
        ReglasService,
        AuthGuard,
        RoleGuard
    ]
})

export class SharedModule {
    constructor() { }
}