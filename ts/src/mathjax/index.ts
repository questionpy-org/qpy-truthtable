/* eslint-disable */

import { BaseMathJaxHelper } from "./base";
import { MathJax3Helper } from "./v3";
import { MathJax4Helper } from "./v4";

let mathJaxHelper: BaseMathJaxHelper | null = null;

/**
 * Uses MathJax to render LaTeX inside the given element.
 *
 * If MathJax is not available, it will be loaded from a CDN.
 */
export function renderLaTeX(element: Element, inline: boolean = true): Promise<void> {
    if (mathJaxHelper === null) {
        // @ts-expect-error We need to check for the existence of MathJax.
        const mathjax: any = window.MathJax;
        if (typeof mathjax === "object") {
            if (mathjax.version.startsWith("3.")) {
                mathJaxHelper = new MathJax3Helper(mathjax);
            } else if (mathjax.version.startsWith("4.")) {
                mathJaxHelper = new MathJax4Helper(mathjax);
            } else {
                return Promise.reject(new Error("Only MathJax 3.x and 4.x are supported."));
            }
        } else {
            // We should in theory switch to MathJax 4 as the default, but we might need to change our UI.
            mathJaxHelper = new MathJax4Helper();
        }
    }

    return mathJaxHelper.render(element, inline);
}
