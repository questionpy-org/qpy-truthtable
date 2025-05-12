/* eslint-disable */
import { BaseMathJaxHelper } from "./base";

/**
 * Uses MathJax 2 to render LaTeX.
 *
 * Docs: https://docs.mathjax.org/en/v2.7-latest/
 */
export class MathJax2Helper extends BaseMathJaxHelper {
    protected cdnUrl = "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS_CHTML";

    protected loadFromCdn() {
        // Configure MathJax.
        const script = document.createElement("script");
        script.type = "text/x-mathjax-config";
        script.text = `
            MathJax.Hub.Config({
                tex2jax: {
                    inlineMath: [["\\\\(", "\\\\)"]],
                    displayMath: [["\\\\[", "\\\\]"]],
                    processEscapes: true,
                },
                skipStartupTypeset: true,
                errorSettings: {message: ["!"]},
                messageStyle: "none",
            });
        `;
        document.head.appendChild(script);
        return super.loadFromCdn();
    }

    protected _render(element: Element, inline: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                // Ensure that MathJax is fully initialized.
                this.mathjax.Hub.Register.StartupHook("End", () => {
                    // We require the 'tex2jax' extension.
                    if (this.mathjax.Extension.tex2jax === undefined) {
                        throw new Error("The 'tex2jax' extension is required.");
                    }

                    // Get the delimiters.
                    const inlineDelimiters = this.mathjax.Extension.tex2jax.config.inlineMath[0];
                    const displayDelimiters = this.mathjax.Extension.tex2jax.config.displayMath[0];
                    const [openingDelimiter, closingDelimiter] = inline ? inlineDelimiters : displayDelimiters;

                    // Add the delimiters.
                    element.textContent = `${openingDelimiter} ${element.textContent} ${closingDelimiter}`;

                    // Perform the rendering.
                    this.mathjax.Hub.Queue(["Typeset", this.mathjax.Hub, element], [resolve]);
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}
