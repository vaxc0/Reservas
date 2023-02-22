import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        AccordionModule
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        NotFoundComponent,
        AccordionModule,
        RouterModule
    ],
    providers: []
})

export class SharedModule {
    constructor() { }
}