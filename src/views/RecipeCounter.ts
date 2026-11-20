export class RecipeCounter {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  render(count: number): void {
    this.element.textContent = `${count} recette${count > 1 ? "s" : ""}`;
  }
}
