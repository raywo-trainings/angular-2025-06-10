import {Component, effect, inject, input, OnDestroy, signal} from '@angular/core';
import {Recipes} from '../../services/recipes';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-recipe-detail-view',
  imports: [
    FaIconComponent
  ],
  templateUrl: './recipe-detail-view.html',
  styleUrl: './recipe-detail-view.scss'
})
export class RecipeDetailView implements OnDestroy {

  private readonly recipeService = inject(Recipes);
  private readonly subscriptions: Subscription[] = [];

  protected readonly faClock = faClock;
  protected readonly faExclamation = faExclamation;

  protected recipe = signal<any | undefined>(undefined)

  public recipeId = input.required<string>();


  constructor() {
    effect(() => {
      const id = this.recipeId();

      this.subscriptions.push(
        this.recipeService.getRecipeById(id)
          .subscribe(recipe => this.recipe.set(recipe))
      );
    });
  }


  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
