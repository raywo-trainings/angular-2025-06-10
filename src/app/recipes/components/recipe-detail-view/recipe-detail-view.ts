import {Component, effect, inject, input, signal} from '@angular/core';
import {Recipes} from '../../services/recipes';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-recipe-detail-view',
  imports: [
    FaIconComponent
  ],
  templateUrl: './recipe-detail-view.html',
  styleUrl: './recipe-detail-view.scss'
})
export class RecipeDetailView {

  private readonly recipeService = inject(Recipes);

  protected recipe = signal<any | undefined>(undefined)

  public recipeId = input.required<string>();


  constructor() {
    effect(() => {
      const id = this.recipeId();
      const recipe = this.recipeService.getRecipeById(id);

      this.recipe.set(recipe);
    });
  }


  protected readonly faClock = faClock;
  protected readonly faExclamation = faExclamation;
}
