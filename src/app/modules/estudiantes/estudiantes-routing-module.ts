import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './pages/estudiantes.component';

const routes: Routes = [
    {
        path: '',
        children: [
            /* { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, */
            {path:'',loadChildren:() => import('../auth/auth.module').then((m) => m.AuthModule)},
            {
                path: 'dashboard', title: 'Portal Genesis',
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