/* eslint-disable */

import { BaseMathJaxHelper } from "./base";
import { MathJax2Helper } from "./v2";
import { MathJax3Helper } from "./v3";

let mathJaxHelper: BaseMathJaxHelper | null = null;

/**
 * Uses MathJax to render LaTeX inside the given element.
 *
 * If MathJax is not available it will be loaded from a CDN.
 */
export function renderLaTeX(element: Element, inline: boolean = true): Promise<void> {
    if (mathJaxHelper === null) {
        // @ts-expect-error We need to check for the existence of MathJax.
        const mathjax: any = window.MathJax;
        if (typeof mathjax === "object") {
            if (mathjax.version.startsWith("2.")) {
                mathJaxHelper = new MathJax2Helper(mathjax);
            } else if (mathjax.version.startsWith("3.")) {
                mathJaxHelper = new MathJax3Helper(mathjax);
            } else {
                return Promise.reject(new Error("Only MathJax 2.x and 3.x are supported."));
            }
        } else {
            mathJaxHelper = new MathJax3Helper();
        }
    }

    return mathJaxHelper.render(element, inline);
}
