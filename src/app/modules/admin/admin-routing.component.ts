import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login', title: 'Iniciar sesion en Galileo',
                loadChildren:() => import('../auth/auth.module').then((m) => m.AuthModule)
            },
            { path: 'dashboard', component: AdminComponent, title: 'Portal Galileo' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { } 
