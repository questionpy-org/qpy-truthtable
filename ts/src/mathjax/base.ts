/* eslint-disable */

export abstract class BaseMathJaxHelper {
    protected abstract cdnUrl: string;
    protected mathjax: any;
    private loadPromise: Promise<void> | null = null;

    /**
     * MathJax helper.
     *
     * If the `mathjax` parameter is undefined, MathJax will be loaded from a CDN before the rendering occurs.
     */
    constructor(mathjax: any = undefined) {
        this.mathjax = mathjax;
    }

    /**
     * Loads MathJax from a CDN and initializes it.
     *
     * @protected
     */
    protected loadFromCdn(): Promise<void> {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        return this.loadPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = this.cdnUrl;
            script.async = true;

            script.onload = () => {
                // @ts-expect-error After loading the script, window.MathJax will exist.
                this.mathjax = window.MathJax;

                // We return the startup promise to ensure that MathJax is fully initialized before using it.
                resolve(this.mathjax.startup.promise);
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
        if (this.mathjax === undefined) {
            return this.loadFromCdn().then(() => this._render(element, inline));
        }
        return this._render(element, inline);
    }
}
