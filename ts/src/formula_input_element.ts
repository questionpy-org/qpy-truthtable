import { OutputFormat } from "./parser/parser";
import { hideAndShowElement, renderBora } from "./utils";

export class FormulaInput {
    readonly #wrapperElement: HTMLDivElement;
    readonly #inputElement: HTMLInputElement;
    readonly #displayElement: HTMLSpanElement;

    readonly #format: OutputFormat;

    #lastFormula: string | null = null;

    constructor(
        wrapperElement: HTMLDivElement,
        inputElement: HTMLInputElement,
        displayElement: HTMLSpanElement,
        format: OutputFormat,
        enabled: boolean,
    ) {
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
            try {
                renderBora(formula, this.#displayElement, this.#format);
                this.viewRenderedFormula();
            } catch {
                this.setInputValidity("invalid");
            }
        } else {
            this.viewInputField();
        }

        if (enabled) {
            this.setupEventListeners();
        } else {
            this.#inputElement.disabled = true;
        }
    }

    private setInputValidity(validity: "valid" | "invalid") {
        if (validity === "valid") {
            if (this.#inputElement.classList.contains("is-invalid")) {
                this.#inputElement.setCustomValidity("");
                this.#inputElement.reportValidity();
                this.#inputElement.classList.remove("is-invalid");
            }
        } else {
            this.#inputElement.setCustomValidity("Invalid formula.");
            this.#inputElement.reportValidity();
            this.#inputElement.classList.add("is-invalid");
        }
    }

    viewInputField() {
        hideAndShowElement(this.#displayElement, this.#inputElement);
    }

    viewRenderedFormula() {
        hideAndShowElement(this.#inputElement, this.#displayElement);
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

    private updateRendering() {
        const formula = this.getInput().trim();
        if (formula === "") {
            return;
        }

        if (formula !== this.#lastFormula) {
            try {
                renderBora(formula, this.#displayElement, this.#format);
                this.#inputElement.setCustomValidity("");
                this.#inputElement.reportValidity();
                this.#lastFormula = formula;
                this.viewRenderedFormula();
            } catch {
                this.setInputValidity("invalid");
            }
        } else {
            this.viewRenderedFormula();
        }
    }

    private setupEventListeners() {
        this.#inputElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.updateRendering();
            }
        });

        this.#inputElement.addEventListener("blur", () => {
            this.updateRendering();
        });

        this.#inputElement.addEventListener("change", () => {
            this.updateRendering();
        });

        this.#inputElement.addEventListener("input", () => {
            this.setInputValidity("valid");
        });

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
