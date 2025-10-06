import { type OutputFormat } from "./parser/parser.js";
import { renderBora } from "./utils";
import { initIntermediateFormulas, setupButtonToAddIntermediateFormula } from "./intermediate_formulas";

export function init(attempt: object, [format, total_rows]: [OutputFormat, number]) {
    initFormulaElements(format);
    initIntermediateFormulas(format, attempt);
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

    const formulaInputElements = document.querySelectorAll(".formula-input") as NodeListOf<HTMLInputElement>;
    for (const formulaInputElement of formulaInputElements) {
        formulaInputElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    }
}
