import { OutputFormat, parseFormulaToLaTeX } from "./parser/parser.js";

/* eslint-disable */
function render(displayElement: Element) {
    // @ts-ignore
    const mathjax: any = globalThis.MathJax;

    if (typeof mathjax === "object") {
        if (mathjax.version.startsWith("2.")) {
            mathjax.Hub.Queue(["Typeset", mathjax.Hub, displayElement]);
        } else if (mathjax.version.startsWith("3.")) {
            // TODO: we might need to chain this: https://docs.mathjax.org/en/latest/web/typeset.html#typeset-async
            mathjax.typesetPromise([displayElement]);
        } else {
            console.warn("Only MathJax 2.x and 3.x are supported, skipping rendering.");
        }
    } else {
        console.warn("MathJax not available, skipping rendering.");
    }
}
/* eslint-enable */

function renderFormula(formula: string, displayElement: Element, format: OutputFormat) {
    const latex = parseFormulaToLaTeX(formula, format);
    displayElement.textContent = `\\( ${latex} \\)`;
    render(displayElement);
}

function hideAndShowElement(hideElement: HTMLElement, showElement: HTMLElement) {
    hideElement.style.display = "none";
    showElement.style.display = "inline";
    showElement.focus();
}

function initFormulaInputElement(inputElement: HTMLInputElement, displayElement: HTMLElement, format: OutputFormat) {
    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (inputElement.value.trim() !== "") {
                hideAndShowElement(inputElement, displayElement);
            }
        }
    });

    inputElement.addEventListener("blur", () => {
        const formula = inputElement.value.trim();
        if (formula !== "") {
            renderFormula(formula, displayElement, format);
            hideAndShowElement(inputElement, displayElement);
        }
    });

    displayElement.addEventListener("click", () => hideAndShowElement(displayElement, inputElement));
}

export function init(_attempt: object, [format]: [OutputFormat]) {
    // Render formulas which cannot be edited.
    const formulaElements = document.querySelectorAll(".formula");
    for (const formulaElement of formulaElements) {
        renderFormula(formulaElement.textContent!, formulaElement, format);
    }

    // Setup formula input elements.
    const formulaInputWrappers = document.querySelectorAll(".formula-input-wrapper");
    for (const wrapper of formulaInputWrappers) {
        const input: HTMLInputElement = wrapper.querySelector(".formula-input")!;
        const display: HTMLSpanElement = wrapper.querySelector(".formula-display")!;

        const formula = input.value.trim();
        if (formula !== "") {
            renderFormula(formula, display, format);
            hideAndShowElement(input, display);
        } else {
            hideAndShowElement(display, input);
        }

        setupFormulaInputElement(input, display, format);
    }
        initFormulaInputElement(input, display, format);
    }
}
