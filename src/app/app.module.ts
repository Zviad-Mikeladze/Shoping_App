import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecepieListComponent } from './recipes/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recipes/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recipes/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing-module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipesComponent, RecepieListComponent, RecepieDetailComponent, RecepieItemComponent, ShoppingListComponent, ShoppingEditComponent, DropdownDirective, RecipeStartComponent, RecipeEditComponent],
  imports: [BrowserModule , FormsModule ,AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
