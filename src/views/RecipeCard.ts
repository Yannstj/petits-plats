import type { Recipe } from "../types";

export class RecipeCard {
  private recipe: Recipe;

  constructor(recipe: Recipe) {
    this.recipe = recipe;
  }

  render(): HTMLElement {
    const { image, name, time, description, ingredients } = this.recipe;

    const article = document.createElement("article");
    article.className =
      "relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg";

    const ingredientsHtml = ingredients
      .map(
        ({ ingredient, quantity, unit }) => `
          <li>
            <p class="font-medium">${ingredient}</p>
            <p class="text-gray-500">${quantity ?? ""} ${unit ?? ""}</p>
          </li>`,
      )
      .join("");

    article.innerHTML = `
      <div class="h-48 bg-gray-300">
        <img src="/images/recipes/${image}" alt="" class="h-full w-full object-cover" onerror="this.remove()" />
      </div>
      <span class="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs">${time}min</span>
      <div class="flex flex-col gap-4 p-6">
        <h2 class="font-heading text-lg">${name}</h2>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wide text-gray-500">Recette</h3>
          <p class="line-clamp-4 text-sm">${description}</p>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wide text-gray-500">Ingrédients</h3>
          <ul class="grid grid-cols-2 gap-4 text-sm">${ingredientsHtml}</ul>
        </div>
      </div>`;

    return article;
  }
}
