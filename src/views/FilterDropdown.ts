export class FilterDropdown {
  private container: HTMLElement;
  private label: string;
  private panel: HTMLElement;
  private chevron: SVGElement;
  private list: HTMLUListElement;
  private button: HTMLButtonElement;

  constructor(container: HTMLElement, label: string) {
    this.container = container;
    this.label = label;

    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.className =
      "flex w-full items-center justify-between px-4 py-3";
    this.button.setAttribute("aria-expanded", "false");
    this.button.innerHTML = `
      ${this.label}
      <svg viewBox="0 0 24 24" class="size-4 transition-transform" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>`;
    this.chevron = this.button.querySelector("svg")!;

    this.panel = document.createElement("div");
    this.panel.className = "hidden px-4 pb-4";
    this.panel.innerHTML = `
      <input type="search" aria-label="Rechercher dans ${this.label}"
        class="mb-4 w-full rounded-sm border border-gray-300 px-2 py-1 text-sm outline-none" />`;

    this.list = document.createElement("ul");
    this.list.className = "max-h-64 space-y-3 overflow-y-auto text-sm";
    this.panel.appendChild(this.list);

    this.button.addEventListener("click", () => this.toggle());
    this.container.replaceChildren(this.button, this.panel);
  }

  setItems(items: string[]): void {
    this.list.replaceChildren(
      ...items.map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      }),
    );
  }

  toggle(): void {
    const isOpen = this.panel.classList.toggle("hidden") === false;
    this.button.setAttribute("aria-expanded", String(isOpen));
    this.chevron.classList.toggle("rotate-180", isOpen);
  }
}
