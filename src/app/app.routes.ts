import { Routes } from '@angular/router';

export const routes: Routes = [


  {
  path:"menuprincipal",
  loadComponent: () => import('./features/menuprincipal/menuprincipal').then(mod => mod.Menuprincipal),
  }

];
