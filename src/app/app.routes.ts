import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { NotFoundComponent } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'reto-01', loadComponent: () => import('./features/reto-01-formularios-comparacion/reto-01-formularios-comparacion').then(n => n.Reto01FormulariosComparacion) },
  { path: 'reto-02', loadComponent: () => import('./features/reto-02-formularios-formgroup-basico/reto-02-formularios-formgroup-basico').then(n => n.Reto02FormulariosFormgroupBasico) },
  { path: 'reto-03', loadComponent: () => import('./features/reto-03-formularios-formbuilder/reto-03-formularios-formbuilder').then(n => n.Reto03FormulariosFormbuilder) },
  { path: 'reto-04', loadComponent: () => import('./features/reto-04-formularios-validators/reto-04-formularios-validators').then(n => n.Reto04FormulariosValidators) },
  { path: 'reto-05', loadComponent: () => import('./features/reto-05-formularios-estado/reto-05-formularios-estado').then(n => n.Reto05FormulariosEstado) },
  { path: 'reto-06', loadComponent: () => import('./features/reto-06-formularios-errores/reto-06-formularios-errores').then(n => n.Reto06FormulariosErrores) },
  { path: 'reto-07', loadComponent: () => import('./features/reto-07-formularios-submit/reto-07-formularios-submit').then(n => n.Reto07FormulariosSubmit) },

  { path: '**', component: NotFoundComponent },
];
