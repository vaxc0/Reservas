import { NgModule } from "@angular/core";
import { SharedModule } from "../../core/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home.component";

@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
    ],
    providers: []
})

export class HomeModule {
    constructor() { }
}