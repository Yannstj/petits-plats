import "./style.css";
import recipes from "./data/recipes";
import { RecipeList } from "./views/RecipeList";
import { RecipeCounter } from "./views/RecipeCounter";
import { FilterDropdown } from "./views/FilterDropdown";

const list = new RecipeList(document.querySelector<HTMLElement>("#recipes")!);
const counter = new RecipeCounter(
  document.querySelector<HTMLElement>("#recipe-count")!,
);

const ingredients = new FilterDropdown(
  document.querySelector<HTMLElement>("#filter-ingredients")!,
  "Ingrédients",
);
const appliances = new FilterDropdown(
  document.querySelector<HTMLElement>("#filter-appliances")!,
  "Appareils",
);
const ustensils = new FilterDropdown(
  document.querySelector<HTMLElement>("#filter-ustensils")!,
  "Ustensiles",
);

list.render(recipes);
counter.render(recipes.length);

// Valeurs en dur pour tester l'ouverture : seront calculées depuis les recettes.
ingredients.setItems(["Jus de citron", "Glaçons", "Tomate", "Poulet"]);
appliances.setItems(["Blender", "Four", "Saladier"]);
ustensils.setItems(["Fouet", "Verres", "Presse citron"]);
