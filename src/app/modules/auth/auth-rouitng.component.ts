import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './pages/auth.component';

const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            {path:'',redirectTo:'sign-in',pathMatch:'full'},
            {path:'sign-in',component:LoginComponent},
            {path:'sign-up',component:RegisterComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { } 
