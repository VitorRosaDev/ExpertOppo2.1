import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SmartphonesPageRoutingModule } from './smartphones-routing.module';
import { SmartphonesPage } from './smartphones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartphonesPageRoutingModule
  ],
  declarations: [SmartphonesPage]
})
export class SmartphonesPageModule {}
