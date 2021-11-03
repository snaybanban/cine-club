import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'inicio1',
    loadChildren: () => import('./inicio1/inicio1.module').then( m => m.Inicio1PageModule)
  },
  {
    path: 'interfas',
    loadChildren: () => import('./interfas/interfas.module').then( m => m.InterfasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
