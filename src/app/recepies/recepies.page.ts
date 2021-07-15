import { Component, OnInit } from '@angular/core';
import { Recipe } from './recepie.model';

import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
