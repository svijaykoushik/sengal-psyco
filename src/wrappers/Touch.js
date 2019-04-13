/**
 * @module wrappers/Touch
 * @author Vijaykoushik, S. <svijaykoushik@htomail.com>
 */

 import DOMEvents from "./DOMEvents.js";

 /**
  * A wrapper for DOM touch events for touch screen devices.
  */
 class Touch extends DOMEvents{
    /**
     * Creates a touch wrapper.
     * @param {Element} targetElement The target element to  which the event listener has to be attached.
     */
    constructor(targetElement){
        super();
        /**
         * The target element to which the event listener has to be attached.
         * @type {Element}
         * @private
         */
        this._eventTarget = targetElement;
    }

    /**
     * Adds the specified callback function as the event listener for touchstart event.
     * @param {function} listenerCallback The event listener callback to be executed when touchstart event is fired.
     */
    addTouchStartListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.TOUCH_START, listenerCallback);
    }

    /**
     * Adds the specified callback function as the event listener for touchend event.
     * @param {function} listenerCallback The event listener callback to be executed when touchend event is fired.
     */
    addTouchEndListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.TOUCH_END, listenerCallback);
    }

    /**
     * Adds the specified callback function as the event listener for touchcancel event.
     * @param {function} listenerCallback The event listener callback to be executed when touchcancel event is fired.
     */
    addTouchCancelListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.TOUCH_CANCEL, listenerCallback);
    }

    /**
     * Adds the specified callback function as the event listener for touchmove event.
     * @param {function} listenerCallback The event listener callback to be executed when touchmove event is fired.
     */
    addTouchMoveListener(listenerCallback){
        super.addListener(_eventTarget, super.supportedEvents.TOUCH_MOVE, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addTouchStartListener for touchstart event.
     * @param {function} listenerCallback The previously added event listener callback that needs to be removed.
     */
    removeTouchStartListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.TOUCH_START, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addTouchEndListener for touchend event.
     * @param {function} listenerCallback The previously added event listener callback that needs to be removed.
     */
    removeTouchEndListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.TOUCH_END, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addTouchCancelListener for touchcancel event.
     * @param {function} The previously added event listener callback that needs to be removed.
     */
    removeTouchCancelListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.TOUCH_CANCEL, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addMouseTouchMoveListener for touchmove event.
     * @param {function} The previously added event listener callback that needs to be removed.
     */
    removeTouchMoveListener(listenerCallback){
        super.removeListener(_eventTarget, super.supportedEvents.TOUCH_MOVE, listenerCallback);
    }
 }

 export default Touch;