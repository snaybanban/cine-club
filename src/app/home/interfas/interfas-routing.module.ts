import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfasPage } from './interfas.page';

const routes: Routes = [
  {
    path: '',
    component: InterfasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfasPageRoutingModule {}
