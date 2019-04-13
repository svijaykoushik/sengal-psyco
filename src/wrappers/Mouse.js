/**
 * @module wrappers/mouse
 * @author Vijaykoushik,S. <svijaykoushik@hotmail.com>
 */

 import DOMEvents from "./DOMEvents.js";

 /**
  * Wrapper for DOM mouse events
  */
 class Mouse extends DOMEvents{

    /**
     * Creates a mouse wrapper
     * @param {Element} targetElement The target element to  which the event listener has to be attached.
     */
     constructor(targetElement){
         super();
         this._eventTarget = targetElement;
     }

     /**
      * Adds the specified callback function as the event listener for the mousedown event
      * @param {function} listenerCallback The event listener callback to be executed when mousedown event is fired
      */
     addMouseDownListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.MOUSE_DOWN, listenerCallback);
     }

     /**
      * Adds the specified callback function as the event listener for the mouseup event.
      * @param {function} listenerCallback The event listener callback to be executed when mouseup event is fired.
      */
     addMouseUpListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.MOUSE_UP, listenerCallback);
     }

     /**
      * Adds the specified callback function as the event listener for mousemove event.
      * @param {function} listenerCallback The event listener callback to be executed when mousemove event is fired.
      */
     addMouseMoveListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.MOUSE_MOVE, listenerCallback);
     }

     /**
      * Removes the previously added event listener function using addMouseDownListener for mousedown event.
      * @param {function} listenerCallback The previously added event listener callback that needs to be removed.
      */
     removeMouseDownListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.MOUSE_DOWN, listenerCallback);
     }     

     /**
      * Removes the previously added event listener function using addMouseUpListener for mouseup event.
      * @param {function} listenerCallback The previously added event listener callback that needs to be removed.
      */
     removeMouseUpListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.MOUSE_UP, listenerCallback);
     }    

     /**
      * Removes the previously added event listener function using addMouseMoveListener for mousemove event.
      * @param {function} listenerCallback The previously added event listener callback that needs to be removed.
      */
     removeMouseMoveListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.MOUSE_MOVE, listenerCallback);
     }
 }

 export default Mouse;