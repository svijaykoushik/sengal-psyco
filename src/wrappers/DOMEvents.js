/**
 * @module wrappers/DOMEvents.js
 */

export class DOMEvents{

    constructor(){
        /**
         * An enumeration of supported events
         */
        this.supportedEvents = {
            "KEY_DOWN": "keydown",
            "KEY_UP": "keyup",
            "MOUSE_DOWN": "mousedown",
            "MOUSE_UP": "mouseup",
            "MOUSE_MOVE": "mousemove",
            "TOUCH_START": "touchstart",
            "TOUCH_END": "touchend",
            "TOUCH_CANCEL": "touchcancel",
            "TOUCH_MOVE": "touchmove"
        };
    }

    static get EventName (){
        return this.supportedEvents;
    }

    /**
     * Adds a callback function  to be called when the specified event is delivered to the specified target.
     * @param {Element} target The target element to  which the event listener has to be attached.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events | DOM Event Types} for supported event types.
     * @param {string} event A case sensitive name of the event to listen for.
     * @param {function} eventCallback The callback function to be executed when the specified event is fired.
     */
    addListener(target, event, eventCallback){
        target.addEventListener(event, eventCallback);
    }

    /**
     * Removes the callback function previously setup by addEventListener for the specified event attached to the specified target.
     * @param {Element} target The target element to which the event listener has to be attached. 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events | DOM Event Types} for supported event types.
     * @param {string} event A case sensitive name of the DOM event to listen for.
     * @param {function} eventCallback The callback function to be executed when the specified event is fired.
     */
    removeListener(target, event, eventCallback){
        target.removeEventListener(event, eventCallback);
    }
}