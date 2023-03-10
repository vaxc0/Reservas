import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLES } from 'src/app/constants/roles-guard';
import { PerfilComponent } from 'src/app/core/components/perfil/perfil.component';
import { AuthGuard, RoleGuard } from 'src/app/core/guards';
import { AdminComponent } from './pages/admin.component';
import { EspaciosFisicosComponent } from './pages/espacios-fisicos/espacios-fisicos.component';
import { GestionReglasComponent } from './pages/gestion-reglas/gestion-reglas.component';
import { VisualizarReservasComponent } from './pages/visualizar-reservas/visualizar-reservas.component';

const routes: Routes = [
    {
        path: '',
        children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '', loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule) },
            {
                path: 'dashboard', component: AdminComponent,
                canActivate:[AuthGuard,RoleGuard],
                data: { roles: [ROLES.ADMIN,ROLES.OPERARIO] },
                children: [
                    {path:'espacios_f',component:EspaciosFisicosComponent,
                    canActivate:[RoleGuard],data: { roles: [ROLES.ADMIN] }},
                    {path:'reglas',component:GestionReglasComponent},
                    {path:'reservas',component:VisualizarReservasComponent},
                    {path:'perfil',component:PerfilComponent},
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { } 