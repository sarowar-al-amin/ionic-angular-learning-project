import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiesPage } from './recepies.page';

const routes: Routes = [
  {
    path: '',
    component: RecepiesPage
  },
  // {
  //   path: 'recipe-details',
  //   loadChildren: () => import('./recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepiesPageRoutingModule {}
