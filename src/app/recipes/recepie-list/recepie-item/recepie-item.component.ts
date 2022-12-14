import { Component, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
}
