import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Recipes {

  private readonly http = inject(HttpClient);

  public getRecipes(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/recipes")
  }

  public getRecipeById(id: string) {
    // return this.recipes
    //   .find(recipe => recipe.id === id);
  }

}
