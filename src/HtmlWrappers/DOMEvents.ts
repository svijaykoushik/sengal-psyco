/**
 * @module wrappers/DOMEvents.js
 * @author Vijaykoushik, S. <svijaykoushik@hotmail.com>
 */

export class DOMEvents {

    constructor() { }

    /**
     * Adds a callback function  to be called when the specified event is delivered to the specified target.
     * @param target The target element to  which the event listener has to be attached.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events | DOM Event Types} for supported event types.
     * @param event A case sensitive name of the event to listen for.
     * @param eventCallback The callback function to be executed when the specified event is fired.
     */
    addListener(target: HTMLElement, event: DOMEvents.Events, eventCallback: EventListenerObject) {
        target.addEventListener(event, eventCallback);
    }

    /**
     * Removes the callback function previously setup by addEventListener for the specified event attached to the specified target.
     * @param target The target element to which the event listener has to be attached. 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events | DOM Event Types} for supported event types.
     * @param event A case sensitive name of the DOM event to listen for.
     * @param  eventCallback The callback function to be executed when the specified event is fired.
     */
    removeListener(target: HTMLElement, event: DOMEvents.Events, eventCallback: EventListenerObject) {
        target.removeEventListener(event, eventCallback);
    }
}

export namespace DOMEvents {
    export enum Events {
        "KEY_DOWN" = "keydown",
        "KEY_UP" = "keyup",
        "MOUSE_DOWN" = "mousedown",
        "MOUSE_UP" = "mouseup",
        "MOUSE_MOVE" = "mousemove",
        "TOUCH_START" = "touchstart",
        "TOUCH_END" = "touchend",
        "TOUCH_CANCEL" = "touchcancel",
        "TOUCH_MOVE" = "touchmove"
    }
}