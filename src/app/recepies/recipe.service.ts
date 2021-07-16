import { Injectable } from '@angular/core';
import { Recipe } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 's1',
      title: 'Kala bhuna',
      imageUrl: 'https://images.app.goo.gl/ZpzDTQryyPEbDTyq6',
      ingredients: ['raw cumin 1 tsp', 'nutmeg 1/4', 'mace 2 pcs', 'cloves 6 pcs', 'black pepper 1 tsp', 'green cardamom 6 pcs']
    },
    {
      id: 's2',
      title: 'Kala bhuna 2',
      imageUrl: 'https://cookpad.com/us/recipe/images/2cca2e5dd84f3d3c',
      ingredients: ['cinnamon 3 pcs', 'yellow mustard seeds 1 tsp', 'meat 1 kg', 'salt to taste (1/2 tsp)', 'red chili powder 1 tsp']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find( recipe => recipe.id === recipeId)
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
