import {Injectable} from '@angular/core';
import {recipes} from '../data/recipe.dummy.data';


@Injectable({
  providedIn: 'root'
})
export class Recipes {

  private recipes = recipes;

  public getRecipes() {
    return this.recipes;
  }

  public getRecipeById(id: string) {
    return this.recipes
      .find(recipe => recipe.id === id);
  }

}
