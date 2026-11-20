import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";

export class RecipeList {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render(recipes: Recipe[]): void {
    this.container.replaceChildren(
      ...recipes.map((recipe) => new RecipeCard(recipe).render()),
    );
  }
}
