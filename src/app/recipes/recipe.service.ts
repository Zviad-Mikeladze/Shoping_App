import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test',
      'test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'A test second',
      'test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
  ];
  getRecipes(){
    return this.recipes.slice();
  }
}
