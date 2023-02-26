import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';
import { AuthService } from './modules/auth/service/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { path: 'home/:portal', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'galileo', loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'genesis', loadChildren: () => import('./modules/estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
