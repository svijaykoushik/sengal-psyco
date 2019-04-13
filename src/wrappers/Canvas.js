/**
 * @module wrappers/Canvas.js
 * @author Vijaykoushik, S. <svijaykoushik@hotmail.com>
 */

/**
 * A wrapper for the <canvas> element
 */
 class Canvas{
     constructor(canvasElementID){
         /**
          * The HTML5 <canvas> element on the document.
          * @private
          * @type {Element}
          * @readonly
          */
         this.canvasElement = document.getElementById(canvasElementID);
         /**
          * The height of the canvas
          * @private
          * @type {number}
          */
         this.height =canvasElement.height;
         /**
          * The width of the canvas
          * @private
          * @type {number}
          */
         this.width = canvasElement.width;
         /**
          * The 2D rendering context on which drawings are drawn
          * @private
          * @readonly
          * @type{CanvasRenderingContext2D}
          */
         this.renderingContext2D = canvasElement.getContext("2d");
     }

     /**
      * Gets the <canvas> element
      * @public
      * @readonly
      */
     get CanvasElement(){
         return this.canvasElement;
     }

     /**
      * gets/sets the height of the <canvas>.
      * @public
      */
     get Height(){
         return this.height;
     }

     set Height(value){
         this.height = value;
     }

     /**
      * gets/sets the width of the <canvas>.
      * @public
      */
     get Width(){
         return this.width;
     }

     set Width(value){
         this.width = value;
     }

     /**
      * Gets the 2d Rendering context of the <canvas>.
      * @public
      * @readonly
      */
     get RenderingContext2D(){
         return this.renderingContext2D;
     }
 }

 export default Canvas;