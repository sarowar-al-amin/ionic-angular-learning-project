import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'recepies',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recepies/recepies.module').then( m => m.RecepiesPageModule)
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recepies/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
