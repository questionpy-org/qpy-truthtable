/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */

export abstract class BaseMathJaxHelper {
    protected abstract cdnUrl: string;
    protected mathjax: any;

    private renderQueue: Promise<void> = Promise.resolve();

    /**
     * MathJax helper.
     *
     * If the `mathjax` parameter is undefined, MathJax will be loaded from a CDN before the rendering occurs.
     */
    constructor(mathjax: any = undefined) {
        this.mathjax = mathjax;
    }

    /**
     * Loads MathJax from a CDN.
     *
     * @protected
     */
    protected loadFromCdn(): Promise<void> {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = this.cdnUrl;
            script.async = true;

            script.onload = () => {
                // @ts-expect-error After loading the script, window.MathJax will exist.
                this.mathjax = window.MathJax;
                resolve();
            };
            script.onerror = () => reject(new Error(`Failed to load ${this.cdnUrl}.`));

            document.head.appendChild(script);
        });
    }

    /**
     * Renders LaTeX inside an element.
     *
     * @protected
     */
    protected abstract _render(element: Element, inline: boolean): Promise<void>;

    /**
     * Renders LaTeX inside an element. Loads MathJax from a CDN if necessary.
     */
    render(element: Element, inline: boolean): Promise<void> {
        // We do this to chain every render call. This also ensures that we only load once from the CDN:
        // https://docs.mathjax.org/en/v3.2-latest/web/typeset.html#handling-asynchronous-typesetting
        return (this.renderQueue = this.renderQueue.then(() => {
            if (this.mathjax === undefined) {
                return this.loadFromCdn().then(() => this._render(element, inline));
            }
            return this._render(element, inline);
        }));
    }
}
