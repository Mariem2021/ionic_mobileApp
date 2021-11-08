import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanifierReunionPageRoutingModule } from './planifier-reunion-routing.module';

import { PlanifierReunionPage } from './planifier-reunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanifierReunionPageRoutingModule
  ],
  declarations: [PlanifierReunionPage]
})
export class PlanifierReunionPageModule {}
