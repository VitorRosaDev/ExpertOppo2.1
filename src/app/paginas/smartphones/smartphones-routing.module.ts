import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartphonesPage } from './smartphones.page';

const routes: Routes = [
  {
    path: '',
    component: SmartphonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartphonesPageRoutingModule {}
