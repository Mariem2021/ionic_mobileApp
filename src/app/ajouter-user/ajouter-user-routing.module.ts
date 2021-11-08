import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterUserPage } from './ajouter-user.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterUserPageRoutingModule {}
