import {Component, inject} from '@angular/core';
import {Recipes} from '../../services/recipes';
import {RouterLink} from '@angular/router';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-recipe-list',
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss'
})
export class RecipeList {

  private readonly recipeService = inject(Recipes);

  protected recipes$ = this.recipeService.getRecipes();

}
