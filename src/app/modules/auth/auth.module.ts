import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AuthRoutingModule } from "./auth-rouitng.component";
import { AuthComponent } from "./pages/auth.component";

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthComponent
    ],
    exports: [

    ],
    providers: []
})

export class AuthModule {
    constructor() { }
}