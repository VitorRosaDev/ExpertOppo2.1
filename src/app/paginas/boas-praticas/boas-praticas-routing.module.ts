import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoasPraticasPage } from './boas-praticas.page';

const routes: Routes = [
  {
    path: '',
    component: BoasPraticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoasPraticasPageRoutingModule {}
