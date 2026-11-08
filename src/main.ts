import "./style.css";
import recipes from "./data/recipes";
import { RecipeCard } from "./views/RecipeCard";

const list = document.querySelector<HTMLElement>("#recipes")!;
recipes.forEach((recipe) => list.appendChild(new RecipeCard(recipe).render()));
