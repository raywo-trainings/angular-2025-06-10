import {Component, inject} from '@angular/core';
import {Recipes} from '../../services/recipes';


@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss'
})
export class RecipeList {

  private readonly recipeService = inject(Recipes);

  protected recipes = this.recipeService.getRecipes();

}
