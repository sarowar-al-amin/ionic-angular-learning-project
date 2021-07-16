import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepiesPageRoutingModule } from './recepies-routing.module';

import { RecepiesPage } from './recepies.page';
import { Routes } from '@angular/router';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

const routes: Routes = [
  {
    path: ' ',
    component: RecepiesPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepiesPageRoutingModule
  ],
  declarations: [RecepiesPage, RecipeItemComponent]
})
export class RecepiesPageModule {}
