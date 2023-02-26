import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLES } from 'src/app/constants/roles-guard';
import { RoleGuard } from 'src/app/core/guards';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EstudiantesComponent } from './pages/estudiantes.component';

const routes: Routes = [
    {
        path: '',
        children: [
            /* { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, */
            {path:'',loadChildren:() => import('../auth/auth.module').then((m) => m.AuthModule)},
            {
                path: 'dashboard', title: 'Portal Genesis',
                canActivate:[AuthGuard,RoleGuard],
                data: { roles: [ROLES.STUDENT] },
                component:EstudiantesComponent,
                children:[

                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstudiantesRoutingModule { } 