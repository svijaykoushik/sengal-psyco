/**
 * @module wrappers/keyboard
 * @author Vijaykoushik, S. <svijaykoushik@hotmail.com>
 */

 import DOMEvents from "./DOMEvents.js";

/**
 * A wrapper class for DOM keyboard events.
 */
export class Keyboard extends DOMEvents{
    /**
     * create a keyboard wrapper.
     * @param {Element} targetElement The target element to which the event listener has to be attached.
     */
    constructor(targetElement){
        super();
        this._eventTarget = targetElement;
    }

    /**
     * Adds the specified callback function as the event listener for the keydown event.
     * @param {function} listenerCallback The event listener callback function to be executed when the keyup event is fired.
     */
    addKeyDownListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.KEY_DOWN, listenerCallback);
    }
    

    /**
     * Adds the specified callback function as the event listener for the keyup event.
     * @param {function} listenerCallback The event listener callback function to be executed when the keyup event is fired.
     */
    addKeyUpListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.KEY_UP, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addKeyDownListener for the keydown event.
     * @see {@link addKeyDownListener} for more information.
     * @param {function} listenerCallback The previously added listener callback that needs to be removed.
     */
    removeKeyDownListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.KEY_DOWN, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addKeyUpListener for keyUp event.
     * @see {@link addKeyUpListener} for more information.
     * @param {function} listenerCallback The previously added listener callback that needs to be removed
     */
    removeKeyUpListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.KEY_UP, listenerCallback);
    }
}