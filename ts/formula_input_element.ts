import {OutputFormat} from "./parser/parser";
import {hideAndShowElement, renderBora} from "./utils";

export class FormulaInput {
    readonly #wrapperElement: HTMLDivElement;
    readonly #inputElement: HTMLInputElement;
    readonly #displayElement: HTMLSpanElement;

    readonly #format: OutputFormat;

    constructor(wrapperElement: HTMLDivElement, inputElement: HTMLInputElement, displayElement: HTMLSpanElement, format: OutputFormat, enabled: boolean) {
        this.#wrapperElement = wrapperElement;
        this.#wrapperElement.classList.add("formula-input-wrapper");

        this.#inputElement = inputElement;
        this.#inputElement.classList.add("formula-input", "form-control", "qpy-input");
        this.#inputElement.type = "text";

        this.#displayElement = displayElement;
        this.#displayElement.classList.add("formula-display");

        this.#wrapperElement.appendChild(this.#inputElement);
        this.#wrapperElement.appendChild(this.#displayElement);

        this.#format = format;

        const formula = this.getInput().trim();
        if (formula !== "") {
            renderBora(formula, this.#displayElement, this.#format);
            this.viewRenderedFormula();
        } else {
            this.viewInputField();
        }

        if (enabled) {
            this.setupEventListeners();
        } else {
            this.#inputElement.disabled = true;
        }
    }

    viewInputField() {
        hideAndShowElement(this.#displayElement, this.#inputElement);
    }

    viewRenderedFormula() {
        if (this.getInput().trim() !== "") {
            hideAndShowElement(this.#inputElement, this.#displayElement);
        }
    }

    get element(): HTMLDivElement {
        return this.#wrapperElement;
    }
    get inputElement(): HTMLInputElement {
        return this.#inputElement;
    }

    getInput(): string {
        return this.#inputElement.value;
    }

    private setupEventListeners() {
        this.#inputElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.viewRenderedFormula();
            }
        });

        this.#inputElement.addEventListener("blur", () => {
            this.viewRenderedFormula();
        });

        this.#inputElement.addEventListener("change", () => {
            const formula = this.getInput().trim();
            if (formula !== "") {
                renderBora(formula, this.#displayElement, this.#format);
            }
        })

        this.#displayElement.addEventListener("click", () => this.viewInputField());
    }
}

export function createFormulaInput(formula: string, format: OutputFormat, enabled: boolean): FormulaInput {
    const wrapperElement = document.createElement("div");
    const inputElement = document.createElement("input");
    const displayElement = document.createElement("span");

    inputElement.value = formula;

    return new FormulaInput(wrapperElement, inputElement, displayElement, format, enabled);

}
