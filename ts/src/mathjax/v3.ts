/* eslint-disable */
import { BaseMathJaxHelper } from "./base";

/**
 * Uses MathJax 3 to render LaTeX.
 *
 * Docs: https://docs.mathjax.org/en/v3.2/
 */
export class MathJax3Helper extends BaseMathJaxHelper {
    protected cdnUrl = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
    private queue: Promise<void> = Promise.resolve();

    protected loadFromCdn() {
        // Configure MathJax.
        // @ts-ignore
        window.MathJax = {
            tex: {
                inlineMath: [["\\\\(", "\\\\)"]],
                displayMath: [["\\\\[", "\\\\]"]],
                processEscapes: true,
                packages: { "[+]": ["noerrors"] },
            },
            startup: {
                typeset: false,
            },
            options: {
                ignoreHtmlClass: "tex2jax_ignore",
                processHtmlClass: "tex2jax_process",
            },
            loader: {
                load: ["[tex]/noerrors", "ui/safe"],
            },
        };
        return super.loadFromCdn();
    }

    protected _render(element: Element, inline: boolean): Promise<void> {
        // We need to manually chain every render call.
        // https://docs.mathjax.org/en/v3.2/web/typeset.html#handling-asynchronous-typesetting
        return this.queue = this.queue.then(() => {
            // Get the delimiters.
            const inlineDelimiters = this.mathjax.config.tex?.inlineMath?.[0] ?? ["\\(", "\\)"];
            const displayDelimiters = this.mathjax.config.tex?.displayMath?.[0] ?? ["\\[", "\\]"];
            const [openingDelimiter, closingDelimiter] = inline ? inlineDelimiters : displayDelimiters;

            // Add the delimiters.
            element.textContent = `${openingDelimiter} ${element.textContent} ${closingDelimiter}`;

            // Perform the rendering.
            return this.mathjax.typesetPromise([element]);
        });
    }
}
