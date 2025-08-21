import { type OutputFormat } from "./parser/parser.js";
import { renderBora } from "./utils";
import { FormulaInput } from "./formula_input_element";
import { setupButtonToAddIntermediateFormula, viewExistingIntermediateFormulas } from "./intermediate_formulas";

export function init(attempt: object, [format, total_rows]: [OutputFormat, number]) {
    initFormulaElements(format);
    initFormulaInputElements(format, attempt);
    viewExistingIntermediateFormulas(format, attempt);
    // @ts-expect-error Attempt object definition is not here.
    if (!attempt.readOnly) {
        setupButtonToAddIntermediateFormula(attempt, total_rows, format);
    }
}

function initFormulaElements(format: OutputFormat) {
    const formulaElements = document.querySelectorAll(".formula");
    for (const formulaElement of formulaElements) {
        renderBora(formulaElement.textContent!, formulaElement, format);
    }
}

function initFormulaInputElements(format: OutputFormat, attempt: object) {
    const wrapperElements: NodeListOf<HTMLDivElement> = document.querySelectorAll(".formula-input-wrapper");
    for (const wrapperElement of wrapperElements) {
        const inputElement: HTMLInputElement = wrapperElement.querySelector(".formula-input")!;
        const displayElement: HTMLSpanElement = wrapperElement.querySelector(".formula-display")!;
        // @ts-expect-error Attempt object definition is not here.
        new FormulaInput(wrapperElement, inputElement, displayElement, format, !attempt.readOnly);
    }
}
