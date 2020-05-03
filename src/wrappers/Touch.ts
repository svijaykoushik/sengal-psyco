/**
 * @module wrappers/Touch
 * @author Vijaykoushik, S. <svijaykoushik@htomail.com>
 */

import { DOMEvents } from "./DOMEvents.js";

/**
 * A wrapper for DOM touch events for touch screen devices.
 */
class Touch extends DOMEvents {
    private _eventTarget: HTMLElement;
    /**
     * Creates a touch wrapper.
     * @param {HTMLElement} targetElement The target element to  which the event listener has to be attached.
     */
    constructor(targetElement: HTMLElement) {
        super();
        /**
         * The target element to which the event listener has to be attached.
         * @type {HTMLElement}
         * @private
         */
        this._eventTarget = targetElement;
    }

    /**
     * Adds the specified callback function as the event listener for touchstart event.
     * @param {EventListenerObject} listenerCallback The event listener callback to be executed when touchstart event is fired.
     */
    addTouchStartListener(listenerCallback: EventListenerObject) {
        super.addListener(this._eventTarget, DOMEvents.Events.TOUCH_START, listenerCallback);
    }

    /**
     * Adds the specified callback function as the event listener for touchend event.
     * @param {EventListenerObject} listenerCallback The event listener callback to be executed when touchend event is fired.
     */
    addTouchEndListener(listenerCallback: EventListenerObject) {
        super.addListener(this._eventTarget, DOMEvents.Events.TOUCH_END, listenerCallback);
    }

    /**
     * Adds the specified callback function as the event listener for touchcancel event.
     * @param {EventListenerObject} listenerCallback The event listener callback to be executed when touchcancel event is fired.
     */
    addTouchCancelListener(listenerCallback: EventListenerObject) {
        super.addListener(this._eventTarget, DOMEvents.Events.TOUCH_CANCEL, listenerCallback);
    }

    /**
     * Adds the specified callback function as the event listener for touchmove event.
     * @param {EventListenerObject} listenerCallback The event listener callback to be executed when touchmove event is fired.
     */
    addTouchMoveListener(listenerCallback: EventListenerObject) {
        super.addListener(this._eventTarget, DOMEvents.Events.TOUCH_MOVE, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addTouchStartListener for touchstart event.
     * @param {EventListenerObject} listenerCallback The previously added event listener callback that needs to be removed.
     */
    removeTouchStartListener(listenerCallback: EventListenerObject) {
        super.removeListener(this._eventTarget, DOMEvents.Events.TOUCH_START, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addTouchEndListener for touchend event.
     * @param {EventListenerObject} listenerCallback The previously added event listener callback that needs to be removed.
     */
    removeTouchEndListener(listenerCallback: EventListenerObject) {
        super.removeListener(this._eventTarget, DOMEvents.Events.TOUCH_END, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addTouchCancelListener for touchcancel event.
     * @param {EventListenerObject} The previously added event listener callback that needs to be removed.
     */
    removeTouchCancelListener(listenerCallback) {
        super.removeListener(this._eventTarget, DOMEvents.Events.TOUCH_CANCEL, listenerCallback);
    }

    /**
     * Removes the previously added event listener function using addMouseTouchMoveListener for touchmove event.
     * @param {EventListenerObject} The previously added event listener callback that needs to be removed.
     */
    removeTouchMoveListener(listenerCallback) {
        super.removeListener(this._eventTarget, DOMEvents.Events.TOUCH_MOVE, listenerCallback);
    }
}

export default Touch;