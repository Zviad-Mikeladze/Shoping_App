import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent {
  @Input() recipe: Recipe;
}
