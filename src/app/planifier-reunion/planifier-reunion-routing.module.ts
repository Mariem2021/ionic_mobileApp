import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanifierReunionPage } from './planifier-reunion.page';

const routes: Routes = [
  {
    path: '',
    component: PlanifierReunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanifierReunionPageRoutingModule {}
