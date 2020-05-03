/**
 * @module wrappers/Canvas.js
 * @author Vijaykoushik, S. <svijaykoushik@hotmail.com>
 */

/**
 * A wrapper for the <canvas> element
 */
class Canvas {
    private canvasElement: HTMLCanvasElement;
    private height: number;
    private width: number;
    private renderingContext2D: CanvasRenderingContext2D;
    constructor(canvasElementID: string) {
        /**
         * The HTML5 <canvas> element on the document.
         * @private
         * @type {Element}
         * @readonly
         */
        this.canvasElement = document.getElementById(canvasElementID) as HTMLCanvasElement;
        /**
         * The height of the canvas
         * @private
         * @type {number}
         */
        this.height = this.canvasElement.height;
        /**
         * The width of the canvas
         * @private
         * @type {number}
         */
        this.width = this.canvasElement.width;
        /**
         * The 2D rendering context on which drawings are drawn
         * @private
         * @readonly
         * @type{CanvasRenderingContext2D}
         */
        this.renderingContext2D = this.canvasElement.getContext("2d");
    }

    /**
     * Gets the <canvas> element
     * @public
     * @readonly
     */
    get CanvasElement(): HTMLCanvasElement {
        return this.canvasElement;
    }

    /**
     * gets/sets the height of the <canvas>.
     * @public
     */
    get Height(): number {
        return this.height;
    }

    set Height(value: number) {
        this.height = value;
    }

    /**
     * gets/sets the width of the <canvas>.
     * @public
     */
    get Width(): number {
        return this.width;
    }

    set Width(value: number) {
        this.width = value;
    }

    /**
     * Gets the 2d Rendering context of the <canvas>.
     * @public
     * @readonly
     */
    get RenderingContext2D(): CanvasRenderingContext2D {
        return this.renderingContext2D;
    }
}

export default Canvas;