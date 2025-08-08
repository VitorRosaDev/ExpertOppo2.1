import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SpecsPageRoutingModule } from './specs-routing.module';
import { SpecsPage } from './specs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecsPageRoutingModule
  ],
  declarations: [SpecsPage]
})
export class SpecsPageModule {}
