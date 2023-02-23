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
        NgbModule,
        AccordionModule,
        BsDropdownModule,
        TypeaheadModule,
        
    ],
    providers: []
})

export class SharedModule {
    constructor() { }
}