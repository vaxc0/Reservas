import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLES } from 'src/app/constants/roles-guard';
import { PerfilComponent } from 'src/app/core/components/perfil/perfil.component';
import { AuthGuard, RoleGuard } from 'src/app/core/guards';
import { AdminComponent } from './pages/admin.component';
import { AsignacionManualComponent } from './pages/asignacion-manual/asignacion-manual.component';
import { EspaciosFisicosComponent } from './pages/espacios-fisicos/espacios-fisicos.component';
import { EstablecerReglasComponent } from './pages/establecer-reglas/establecer-reglas.component';
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
                    {path:'espacios_f',component:EspaciosFisicosComponent},
                    {path:'reglas',component:EstablecerReglasComponent},
                    {path:'reservas',component:VisualizarReservasComponent},
                    {path:'asignacion',component:AsignacionManualComponent},
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