import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OppoNelesPageRoutingModule } from './oppo-neles-routing.module';

import { OppoNelesPage } from './oppo-neles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OppoNelesPageRoutingModule
  ],
  declarations: [OppoNelesPage]
})
export class OppoNelesPageModule {}
