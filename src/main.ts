import "./style.css";
import recipes from "./data/recipes";
import { RecipeList } from "./views/RecipeList";
import { RecipeCounter } from "./views/RecipeCounter";

const list = new RecipeList(document.querySelector<HTMLElement>("#recipes")!);
const counter = new RecipeCounter(
  document.querySelector<HTMLElement>("#recipe-count")!,
);

list.render(recipes);
counter.render(recipes.length);
