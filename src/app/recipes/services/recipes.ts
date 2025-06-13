import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {mapDTOtoRecipe, Recipe, RecipeDTO} from '../models/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class Recipes {

  private readonly http = inject(HttpClient);


  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<RecipeDTO[]>("http://localhost:3000/recipes")
      .pipe(
        map(recipes => recipes.map(mapDTOtoRecipe))
      );
  }


  public getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<RecipeDTO>("http://localhost:3000/recipes/" + id)
      .pipe(
        map(mapDTOtoRecipe)
      );
  }

}
