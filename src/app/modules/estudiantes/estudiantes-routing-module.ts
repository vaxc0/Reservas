import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './pages/estudiantes.component';

const routes: Routes = [
    {
        path: '', component: EstudiantesComponent,
        children: [
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstudiantesRoutingModule { } 
