import { type OutputFormat, parseBoraToLaTeX } from "./parser/parser.js";
import { renderLaTeX } from "./mathjax";

/** Render the Bora-formula to the given element. */
export function renderBora(formula: string, element: Element, format: OutputFormat) {
    element.textContent = parseBoraToLaTeX(formula, format);
    renderLaTeX(element).catch(console.error);
}

/** Hides one element and shows the other. */
export function hideAndShowElement(hideElement: HTMLElement, showElement: HTMLElement) {
    hideElement.style.display = "none";
    showElement.style.display = "inline";
    showElement.focus();
}
