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
//ngb
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//services
import { RolesService } from "../services/roles.service";
import { UsuariosService } from "../services/usuarios.service";
import { EspaciosFisicosService } from "../services/espaciosFisicos.service";
import { BloquesService } from "../services/bloque.service";
import { FacultadesService } from "../services/facultad.service";
import { TiposService } from "../services/tipo.service";
import { ListOpcionesComponent } from './components/list-opciones/list-opciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        CommonModule,
        AccordionModule,
        BsDropdownModule,
        TypeaheadModule,
    ],
    declarations: [
        NotFoundComponent,
        AcordeonComponent,
        DropdownComponent,
        ListOpcionesComponent,
        PerfilComponent,
    ],
    exports: [
        HttpClientModule,
        RouterModule,
        CommonModule,
        FormsModule,
        // BrowserAnimationsModule,
        NotFoundComponent,
        AcordeonComponent,
        DropdownComponent,
        ListOpcionesComponent,
        NgbModule,
        AccordionModule,
        BsDropdownModule,
        TypeaheadModule,
    ],
    providers: [//servicios
        RolesService,
        UsuariosService,
        EspaciosFisicosService,
        BloquesService,
        FacultadesService,
        TiposService,
    ]
})

export class SharedModule {
    constructor() { }
}