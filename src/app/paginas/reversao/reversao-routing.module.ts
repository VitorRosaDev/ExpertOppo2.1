import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReversaoPage } from './reversao.page';

const routes: Routes = [
  {
    path: '',
    component: ReversaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReversaoPageRoutingModule {}
