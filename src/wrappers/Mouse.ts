/**
 * @module wrappers/mouse
 * @author Vijaykoushik,S. <svijaykoushik@hotmail.com>
 */

import { DOMEvents } from "./DOMEvents.js";

/**
 * Wrapper for DOM mouse events
 */
class Mouse extends DOMEvents {
   private _eventTarget: HTMLElement
   /**
    * Creates a mouse wrapper
    * @param {Element} targetElement The target element to  which the event listener has to be attached.
    */
   constructor(targetElement: HTMLElement) {
      super();
      this._eventTarget = targetElement;
   }

   /**
    * Adds the specified callback function as the event listener for the mousedown event
    * @param EventListenerObject listenerCallback The event listener callback to be executed when mousedown event is fired
    */
   addMouseDownListener(listenerCallback: EventListenerObject) {
      super.addListener(this._eventTarget, DOMEvents.Events.MOUSE_DOWN, listenerCallback);
   }

   /**
    * Adds the specified callback function as the event listener for the mouseup event.
    * @param EventListenerObject listenerCallback The event listener callback to be executed when mouseup event is fired.
    */
   addMouseUpListener(listenerCallback: EventListenerObject) {
      super.addListener(this._eventTarget, DOMEvents.Events.MOUSE_UP, listenerCallback);
   }

   /**
    * Adds the specified callback function as the event listener for mousemove event.
    * @param EventListenerObject listenerCallback The event listener callback to be executed when mousemove event is fired.
    */
   addMouseMoveListener(listenerCallback: EventListenerObject) {
      super.addListener(this._eventTarget, DOMEvents.Events.MOUSE_MOVE, listenerCallback);
   }

   /**
    * Removes the previously added event listener function using addMouseDownListener for mousedown event.
    * @param EventListenerObject listenerCallback The previously added event listener callback that needs to be removed.
    */
   removeMouseDownListener(listenerCallback: EventListenerObject) {
      super.removeListener(this._eventTarget, DOMEvents.Events.MOUSE_DOWN, listenerCallback);
   }

   /**
    * Removes the previously added event listener function using addMouseUpListener for mouseup event.
    * @param EventListenerObject listenerCallback The previously added event listener callback that needs to be removed.
    */
   removeMouseUpListener(listenerCallback: EventListenerObject) {
      super.removeListener(this._eventTarget, DOMEvents.Events.MOUSE_UP, listenerCallback);
   }

   /**
    * Removes the previously added event listener function using addMouseMoveListener for mousemove event.
    * @param EventListenerObject listenerCallback The previously added event listener callback that needs to be removed.
    */
   removeMouseMoveListener(listenerCallback: EventListenerObject) {
      super.removeListener(this._eventTarget, DOMEvents.Events.MOUSE_MOVE, listenerCallback);
   }
}

export default Mouse;