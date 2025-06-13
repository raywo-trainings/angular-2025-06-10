import {Component, input} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-recipe-overview',
  imports: [
    RouterLink
  ],
  templateUrl: './recipe-overview.html',
  styleUrl: './recipe-overview.scss'
})
export class RecipeOverview {

  public recipe = input.required<Recipe>();

}
