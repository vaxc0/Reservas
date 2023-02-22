import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.component";
import { AdminComponent } from './pages/admin.component';

@NgModule({
    imports: [
        AdminRoutingModule,
        SharedModule
    ],
    declarations: [
        AdminComponent
    ],
    exports: [],
    providers: []
})

export class AdminModule {
    constructor() { }
}