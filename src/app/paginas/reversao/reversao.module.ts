import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReversaoPageRoutingModule } from './reversao-routing.module';

import { ReversaoPage } from './reversao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReversaoPageRoutingModule
  ],
  declarations: [ReversaoPage]
})
export class ReversaoPageModule {}
