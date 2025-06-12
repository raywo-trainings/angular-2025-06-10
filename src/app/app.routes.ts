import {Routes} from '@angular/router';
import {RecipeList} from './recipes/components/recipe-list/recipe-list';
import {RecipeDetailView} from './recipes/components/recipe-detail-view/recipe-detail-view';


export const routes: Routes = [
  {
    path: "recipes",
    component: RecipeList
  },
  {
    path: "recipes/:recipeId",
    component: RecipeDetailView
  },
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  }
];
