import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecsPage } from './specs.page';

const routes: Routes = [
  {
    path: '',
    component: SpecsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsPageRoutingModule {}