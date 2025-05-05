import { type OutputFormat, parseBoraToLaTeX } from "./parser/parser.js";

/* eslint-disable */
/**
 * Use MathJax to render the LaTeX inside a specific element.
 *
 * This function supports MathJax 2.x and 3.x.
 */
export function render(element: Element) {
    // @ts-ignore
    const mathjax: any = globalThis.MathJax;

    if (typeof mathjax === "object") {
        if (mathjax.version.startsWith("2.")) {
            mathjax.Hub.Queue(["Typeset", mathjax.Hub, element]);
        } else if (mathjax.version.startsWith("3.")) {
            // TODO: we might need to chain this: https://docs.mathjax.org/en/latest/web/typeset.html#typeset-async
            mathjax.typesetPromise([element]);
        } else {
            console.warn("Only MathJax 2.x and 3.x are supported, skipping rendering.");
        }
    } else {
        console.warn("MathJax not available, skipping rendering.");
    }
}
/* eslint-enable */

/** Render the Bora-formula to the given element. */
export function renderBora(formula: string, element: Element, format: OutputFormat) {
    const latex = parseBoraToLaTeX(formula, format);
    element.textContent = `\\( ${latex} \\)`;
    render(element);
}

/** Hides one element and shows the other. */
export function hideAndShowElement(hideElement: HTMLElement, showElement: HTMLElement) {
    hideElement.style.display = "none";
    showElement.style.display = "inline";
    showElement.focus();
}
