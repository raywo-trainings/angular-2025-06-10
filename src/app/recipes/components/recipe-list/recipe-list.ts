import {Component, inject} from '@angular/core';
import {Recipes} from '../../services/recipes';
import {AsyncPipe} from '@angular/common';
import {RecipeOverview} from '../recipe-overview/recipe-overview';


@Component({
  selector: 'app-recipe-list',
  imports: [
    AsyncPipe,
    RecipeOverview
  ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss'
})
export class RecipeList {

  private readonly recipeService = inject(Recipes);

  protected recipes$ = this.recipeService.getRecipes();

}
