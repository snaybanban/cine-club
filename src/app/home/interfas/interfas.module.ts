import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfasPageRoutingModule } from './interfas-routing.module';

import { InterfasPage } from './interfas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfasPageRoutingModule
  ],
  declarations: [InterfasPage]
})
export class InterfasPageModule {}
