import { OutputFormat } from "./parser/parser";
import { createFormulaInput, type FormulaInput } from "./formula_input_element";

const tableElement = document.querySelector("table")!;
const intermediateCounterElement = document.getElementById("intermediate-counter")! as HTMLInputElement;
const intermediateFormulasElement = document.getElementById("intermediate-formulas")! as HTMLInputElement;
const intermediateResultsElement = document.getElementById("intermediate-results")! as HTMLInputElement;

export function setupButtonToAddIntermediateFormula(total_rows: number, format: OutputFormat) {
    const addColumnButton = document.querySelector("#add-column")!;
    let intermediateFormulaId = parseInt(intermediateCounterElement.value);

    addColumnButton.addEventListener("click", () => {
        const rows = tableElement.querySelectorAll("tr");

        for (const [index, row] of rows.entries()) {
            let cellElement, intermediateFormulaInput;
            if (index === 0) {
                // The first row of the table contains the formulas.
                cellElement = document.createElement("th");
                intermediateFormulaInput = createIntermediateFormulaInput("", intermediateFormulaId, format, true);
                initValues(intermediateFormulaId, total_rows);
            } else {
                cellElement = document.createElement("td");
                intermediateFormulaInput = createIntermediateResultInput(
                    "",
                    intermediateFormulaId,
                    index - 1,
                    format,
                    true,
                );
            }

            cellElement.appendChild(intermediateFormulaInput.element);
            row.appendChild(cellElement);
        }

        intermediateCounterElement.value = `${++intermediateFormulaId}`;
    });
}

function initValues(intermediateFormulaId: number, total_rows: number) {
    // Populate the hidden input fields.
    const intermediateFormulas = JSON.parse(intermediateFormulasElement.value) as Record<string, string>;
    intermediateFormulas[`${intermediateFormulaId}`] = "";
    intermediateFormulasElement.value = JSON.stringify(intermediateFormulas);

    const intermediateResults = JSON.parse(intermediateResultsElement.value) as Record<string, string[]>;
    const intermediateResultsForFormula = [];
    for (let i = 0; i < total_rows; i++) {
        intermediateResultsForFormula.push("");
    }
    intermediateResults[`${intermediateFormulaId}`] = intermediateResultsForFormula;
    intermediateResultsElement.value = JSON.stringify(intermediateResults);
}

export function viewExistingIntermediateFormulas(format: OutputFormat, isActive: boolean) {
    const intermediateFormulas = JSON.parse(intermediateFormulasElement.value) as Record<string, string>;
    const intermediateResults = JSON.parse(intermediateResultsElement.value) as Record<string, string[]>;

    const rows = tableElement.querySelectorAll("tr");

    for (const [intermediateFormulaId, intermediateFormula] of Object.entries(intermediateFormulas)) {
        const cellElement = document.createElement("th");
        const intermediateFormulaInput = createIntermediateFormulaInput(
            intermediateFormula,
            parseInt(intermediateFormulaId),
            format,
            isActive,
        );
        cellElement.appendChild(intermediateFormulaInput.element);
        rows[0].appendChild(cellElement);

        for (const [index, intermediateResult] of Object.entries(intermediateResults[intermediateFormulaId])) {
            const cellElement = document.createElement("td");
            const intermediateResultInput = createIntermediateResultInput(
                intermediateResult,
                parseInt(intermediateFormulaId),
                parseInt(index),
                format,
                isActive,
            );
            cellElement.appendChild(intermediateResultInput.element);
            rows[parseInt(index) + 1].appendChild(cellElement);
        }
    }
}

function createIntermediateFormulaInput(
    formula: string,
    intermediateFormulaId: number,
    format: OutputFormat,
    enabled: boolean,
): FormulaInput {
    const formulaInputElement = createFormulaInput(formula, format, enabled);
    formulaInputElement.inputElement.setAttribute("data-intermediate-formula", `${intermediateFormulaId}`);

    if (enabled) {
        formulaInputElement.inputElement.addEventListener("change", () => {
            const formulaId = formulaInputElement.inputElement.getAttribute("data-intermediate-formula")!;
            const intermediateFormulas = JSON.parse(intermediateFormulasElement.value) as Record<string, string>;
            intermediateFormulas[formulaId] = formulaInputElement.getInput();
            intermediateFormulasElement.value = JSON.stringify(intermediateFormulas);
        });
    }

    return formulaInputElement;
}

function createIntermediateResultInput(
    formula: string,
    intermediateFormulaId: number,
    row: number,
    format: OutputFormat,
    enabled: boolean,
): FormulaInput {
    const resultInputElement = createFormulaInput(formula, format, enabled);
    resultInputElement.inputElement.maxLength = 1;
    resultInputElement.inputElement.pattern = "0|1";
    resultInputElement.inputElement.setAttribute("data-intermediate-result", `${row}`);
    resultInputElement.inputElement.setAttribute("data-intermediate-result-belongs-to", `${intermediateFormulaId}`);

    if (enabled) {
        resultInputElement.inputElement.addEventListener("change", () => {
            const resultId = parseInt(resultInputElement.inputElement.getAttribute("data-intermediate-result")!);
            const belongsToFormulaId = resultInputElement.inputElement.getAttribute(
                "data-intermediate-result-belongs-to",
            )!;

            const intermediateResults = JSON.parse(intermediateResultsElement.value) as Record<string, string[]>;
            intermediateResults[belongsToFormulaId][resultId] = resultInputElement.getInput();
            intermediateResultsElement.value = JSON.stringify(intermediateResults);
        });
    }

    return resultInputElement;
}
