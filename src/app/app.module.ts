import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecepieListComponent } from './recipes/recepie-list/recepie-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipesComponent, RecepieListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
