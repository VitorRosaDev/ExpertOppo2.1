import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OppoNelesPage } from './oppo-neles.page';

const routes: Routes = [
  {
    path: '',
    component: OppoNelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OppoNelesPageRoutingModule {}
