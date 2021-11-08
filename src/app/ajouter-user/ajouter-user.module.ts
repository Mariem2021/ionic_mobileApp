import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterUserPageRoutingModule } from './ajouter-user-routing.module';

import { AjouterUserPage } from './ajouter-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterUserPageRoutingModule
  ],
  declarations: [AjouterUserPage]
})
export class AjouterUserPageModule {}
