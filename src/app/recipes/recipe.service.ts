import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken',
      'Tasty chicken',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2022/Round-UP-1.jpeg?w=1280&auto=compress%2Cformat&fit=crop&dm=1651184525&s=64d1eb50521f3482d57f6284eeab8043',
      [new Ingredient('Breast', 1), new Ingredient('SourCream', 1)]
    ),
    new Recipe(
      'Burger',
      'tasty burger',
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredientsTo(ingredients);
  }
}
