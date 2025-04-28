import { type OutputFormat } from "./parser/parser.js";
import {renderBora} from "./utils";
import {FormulaInput} from "./formula_input_element";
import {setupButtonToAddIntermediateFormula, viewExistingIntermediateFormulas} from "./intermediate_formulas";

export function init(attempt: object, [format, total_rows]: [OutputFormat, number]) {
    initFormulaElements(format);
    // @ts-expect-error Attempt object definition is not here.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    initFormulaInputElements(format, attempt.isActive);
    // @ts-expect-error Attempt object definition is not here.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    viewExistingIntermediateFormulas(format, attempt.isActive);
    // @ts-expect-error Attempt object definition is not here.
    if (attempt.isActive) {
        setupButtonToAddIntermediateFormula(total_rows, format);
    }
}

function initFormulaElements(format: OutputFormat) {
    const formulaElements = document.querySelectorAll(".formula");
    for (const formulaElement of formulaElements) {
        renderBora(formulaElement.textContent!, formulaElement, format);
    }
}

function initFormulaInputElements(format: OutputFormat, isActive: boolean) {
    const wrapperElements: NodeListOf<HTMLDivElement> = document.querySelectorAll(".formula-input-wrapper");
    for (const wrapperElement of wrapperElements) {
        const inputElement: HTMLInputElement = wrapperElement.querySelector(".formula-input")!;
        const displayElement: HTMLSpanElement = wrapperElement.querySelector(".formula-display")!;
        new FormulaInput(wrapperElement, inputElement, displayElement, format, isActive);
    }
}
