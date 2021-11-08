import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'se-connecter',
    loadChildren: () => import('./se-connecter/se-connecter.module').then( m => m.SeConnecterPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'ajouter-user',
    loadChildren: () => import('./ajouter-user/ajouter-user.module').then( m => m.AjouterUserPageModule)
  },
  {
    path: 'planifier-reunion',
    loadChildren: () => import('./planifier-reunion/planifier-reunion.module').then( m => m.PlanifierReunionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
