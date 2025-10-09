import { OutputFormat } from "./parser/parser";
import { createFormulaInput } from "./formula_input_element";

const tableElement = document.querySelector("table")!;

function createIntermediateFormulaHeader(
    formula: string,
    formulaId: number,
    format: OutputFormat,
    data: Record<string, unknown>,
    enabled: boolean,
): HTMLTableCellElement {
    const cellElement = document.createElement("th");

    const formulaInput = createFormulaInput(formula, format, enabled);
    cellElement.appendChild(formulaInput.element);

    if (enabled) {
        formulaInput.inputElement.addEventListener("change", () => {
            const formulas = (data["intermediate-formulas"] ?? {}) as Record<string, string>;
            formulas[formulaId] = formulaInput.getInput();
            data["intermediate-formulas"] = formulas;
        });

        const editButton = document.createElement("button");
        editButton.tabIndex = -1;
        editButton.innerHTML = "✏️";

        editButton.addEventListener("mousedown", (e) => {
            // This prevents the edit button to trigger the blur event of the input element.
            e.preventDefault();
        });

        editButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            formulaInput.viewInputField();
        });
        cellElement.appendChild(editButton);
    }

    return cellElement;
}

export function setupButtonToAddIntermediateFormula(attempt: object, total_rows: number, format: OutputFormat) {
    // @ts-expect-error Attempt object definition is not here.
    const data = attempt.data as Record<string, unknown>;
    const addColumnButton = document.querySelector<HTMLButtonElement>("#add-column")!;

    const counter = data["intermediate-formula-counter"];
    let intermediateFormulaId = typeof counter === "number" ? counter : 0;

    addColumnButton.addEventListener("click", () => {
        const rows = tableElement.querySelectorAll("tr");

        for (const [index, row] of rows.entries()) {
            let cellElement;
            if (index === 0) {
                // The first row of the table contains the formulas.
                cellElement = createIntermediateFormulaHeader(
                    "",
                    intermediateFormulaId,
                    format,
                    data,
                    // @ts-expect-error Attempt object definition is not here.
                    !attempt.readOnly,
                );
                initValues(data, intermediateFormulaId, total_rows);
            } else {
                cellElement = createIntermediateResultInput("", intermediateFormulaId, index - 1, true, data);
            }

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

export function initIntermediateFormulas(format: OutputFormat, attempt: object) {
    // @ts-expect-error Attempt object definition is not here.
    const data = attempt.data as Record<string, unknown>;
    // @ts-expect-error Attempt object definition is not here.
    const isActive = !attempt.readOnly;
    const intermediateFormulas = (data["intermediate-formulas"] ?? {}) as Record<string, string>;
    const intermediateResults = (data["intermediate-results"] ?? {}) as Record<string, string[]>;

    const rows = tableElement.querySelectorAll("tr");

    for (const [intermediateFormulaId, intermediateFormula] of Object.entries(intermediateFormulas)) {
        const cellElement = createIntermediateFormulaHeader(
            intermediateFormula,
            parseInt(intermediateFormulaId),
            format,
            data,
            isActive,
        );
        rows[0].appendChild(cellElement);

        for (const [index, intermediateResult] of Object.entries(intermediateResults[intermediateFormulaId])) {
            const cellElement = createIntermediateResultInput(
                intermediateResult,
                parseInt(intermediateFormulaId),
                parseInt(index),
                isActive,
                data,
            );
            rows[parseInt(index) + 1].appendChild(cellElement);
        }
    }
}

function createIntermediateResultInput(
    formula: string,
    intermediateFormulaId: number,
    row: number,
    enabled: boolean,
    data: Record<string, unknown>,
): HTMLTableCellElement {
    const cellElement = document.createElement("td");
    // Create the input element for the result.
    const resultInputElement = document.createElement("input");
    resultInputElement.value = formula;
    resultInputElement.maxLength = 1;
    resultInputElement.pattern = "0|1";
    resultInputElement.disabled = !enabled;

    const intermediateResults = (data["intermediate-results"] ?? {}) as Record<string, string[]>;

    if (enabled) {
        resultInputElement.addEventListener("change", () => {
            intermediateResults[intermediateFormulaId][row] = resultInputElement.value;
            data["intermediate-results"] = intermediateResults;
        });

        resultInputElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    }

    cellElement.appendChild(resultInputElement);
    return cellElement;
}
