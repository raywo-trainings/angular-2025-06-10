import {Ingredient} from './ingredient.model';
import {Difficulty} from './difficulty.model';
import {Duration} from './duration.model';


export interface Recipe {

  id?: string;
  name: string;
  img: string;
  servings: number;
  lastEdited: string;
  ingredients: Ingredient[];
  preparation: string;
  difficulty: Difficulty;
  duration: Duration;

}


export interface RecipeDTO {

  id?: string;
  name: string;
  img: string;
  portions: number;
  lastEdited: string;
  ingredients: Ingredient[];
  preparation: string;
  level_of_difficulty: Difficulty;
  duration: Duration;

}

// export function mapDTOtoRecipe(dto: RecipeDTO): Recipe {}

export const mapDTOtoRecipe = (dto: RecipeDTO): Recipe => {
  return {
    id: dto.id,
    name: dto.name,
    img: dto.img,
    servings: dto.portions,
    lastEdited: dto.lastEdited,
    ingredients: dto.ingredients,
    preparation: dto.preparation,
    difficulty: dto.level_of_difficulty,
    duration: dto.duration,
  }
}
