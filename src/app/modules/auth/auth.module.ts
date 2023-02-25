import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { AuthRoutingModule } from "./auth-rouitng.component";
import { AuthComponent } from "./pages/auth.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from "./service/auth.service";

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule,
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports: [
    ],
    providers: [//servicio
        AuthService
    ]
})

export class AuthModule {
    constructor() { }
}