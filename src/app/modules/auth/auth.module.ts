import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AuthRoutingModule } from "./auth-rouitng.component";
import { AuthComponent } from "./pages/auth.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports: [

    ],
    providers: []
})

export class AuthModule {
    constructor() { }
}