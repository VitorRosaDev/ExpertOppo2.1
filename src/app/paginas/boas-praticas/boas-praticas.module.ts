import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoasPraticasPageRoutingModule } from './boas-praticas-routing.module';

import { BoasPraticasPage } from './boas-praticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoasPraticasPageRoutingModule
  ],
  declarations: [BoasPraticasPage]
})
export class BoasPraticasPageModule {}
