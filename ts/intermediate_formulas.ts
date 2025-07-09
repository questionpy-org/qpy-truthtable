import { OutputFormat } from "./parser/parser";
import { createFormulaInput, type FormulaInput } from "./formula_input_element";

const tableElement = document.querySelector("table")!;

export function setupButtonToAddIntermediateFormula(attempt: object, total_rows: number, format: OutputFormat) {
    // @ts-expect-error Attempt object definition is not here.
    const data = attempt.data as Record<string, unknown>;
    const addColumnButton = document.querySelector<HTMLButtonElement>("#add-column")!;

    const counter = data["intermediate-formula-counter"];
    let intermediateFormulaId = typeof counter === "number" ? counter : 0;

    addColumnButton.addEventListener("click", () => {
        const rows = tableElement.querySelectorAll("tr");

        for (const [index, row] of rows.entries()) {
            let cellElement, intermediateFormulaInput;
            if (index === 0) {
                // The first row of the table contains the formulas.
                cellElement = document.createElement("th");
                intermediateFormulaInput = createIntermediateFormulaInput("", intermediateFormulaId, format, true, data);
                initValues(data, intermediateFormulaId, total_rows);
            } else {
                cellElement = document.createElement("td");
                intermediateFormulaInput = createIntermediateResultInput(
                    "",
                    intermediateFormulaId,
                    index - 1,
                    format,
                    true,
                    data,
                );
            }

            cellElement.appendChild(intermediateFormulaInput.element);
            row.appendChild(cellElement);
        }

        data["intermediate-formula-counter"] = ++intermediateFormulaId;
    });
}

function initValues(data: Record<string, unknown>, intermediateFormulaId: number, totalRows: number) {
    const intermediateFormulas = (data["intermediate-formulas"] ?? {}) as Record<string, string>;
    const intermediateResults = (data["intermediate-results"] ?? {}) as Record<string, string[]>;

    intermediateFormulas[`${intermediateFormulaId}`] = "";
    intermediateResults[`${intermediateFormulaId}`] = Array.from({ length: totalRows }, () => "");

    data["intermediate-formulas"] = intermediateFormulas;
    data["intermediate-results"] = intermediateResults;
}

export function viewExistingIntermediateFormulas(format: OutputFormat, attempt: object) {
    // @ts-expect-error Attempt object definition is not here.
    const data = attempt.data as Record<string, unknown>;
    // @ts-expect-error Attempt object definition is not here.
    const isActive = !attempt.readOnly;
    const intermediateFormulas = (data["intermediate-formulas"] ?? {}) as Record<string, string>;
    const intermediateResults = (data["intermediate-results"] ?? {}) as Record<string, string[]>;

    const rows = tableElement.querySelectorAll("tr");

    for (const [intermediateFormulaId, intermediateFormula] of Object.entries(intermediateFormulas)) {
        const cellElement = document.createElement("th");
        const intermediateFormulaInput = createIntermediateFormulaInput(
            intermediateFormula,
            parseInt(intermediateFormulaId),
            format,
            isActive,
            data,
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
                data,
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
    data: Record<string, unknown>,
): FormulaInput {
    const formulaInputElement = createFormulaInput(formula, format, enabled);
    formulaInputElement.inputElement.setAttribute("data-intermediate-formula", `${intermediateFormulaId}`);

    const intermediateFormulas = (data["intermediate-formulas"] ?? {}) as Record<string, string>;

    if (enabled) {
        formulaInputElement.inputElement.addEventListener("change", () => {
            const formulaId = formulaInputElement.inputElement.getAttribute("data-intermediate-formula")!;
            intermediateFormulas[formulaId] = formulaInputElement.getInput();
            data["intermediate-formulas"] = intermediateFormulas;
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
    data: Record<string, unknown>,
): FormulaInput {
    const resultInputElement = createFormulaInput(formula, format, enabled);
    resultInputElement.inputElement.maxLength = 1;
    resultInputElement.inputElement.pattern = "0|1";
    resultInputElement.inputElement.setAttribute("data-intermediate-result", `${row}`);
    resultInputElement.inputElement.setAttribute("data-intermediate-result-belongs-to", `${intermediateFormulaId}`);

    const intermediateResults = (data["intermediate-results"] ?? {}) as Record<string, string[]>;

    if (enabled) {
        resultInputElement.inputElement.addEventListener("change", () => {
            const resultId = parseInt(resultInputElement.inputElement.getAttribute("data-intermediate-result")!);
            const belongsToFormulaId = resultInputElement.inputElement.getAttribute(
                "data-intermediate-result-belongs-to",
            )!;

            intermediateResults[belongsToFormulaId][resultId] = resultInputElement.getInput();
            data["intermediate-results"] = intermediateResults;
        });
    }

    return resultInputElement;
}
