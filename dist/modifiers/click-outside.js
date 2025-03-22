import { modifier } from 'ember-modifier';

const HAS_WINDOWS = typeof window !== 'undefined';
const HAS_NAVIGATOR = typeof navigator !== 'undefined';
const IS_TOUCH = HAS_WINDOWS && ('ontouchstart' in window || HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0);
const EVENTS = IS_TOUCH ? ['touchstart'] : ['click'];
function getEventNames({
  event,
  events
}) {
  if (events) {
    return events;
  }
  if (event) {
    return [event];
  }
  return EVENTS;
}
var clickOutside = modifier(function clickOutside(element, [handlerValue, useCapture] = [undefined, false], hashParams = {}) {
  const refEvent = new Event('clickReference');
  const events = getEventNames(hashParams);
  const isFunction = typeof handlerValue === 'function';
  if (!isFunction) {
    throw new Error('{{click-outside}}: Handler value must be a function.');
  }
  const handlers = [];
  events.forEach(eventName => {
    const handler = event => {
      if (refEvent.timeStamp > event.timeStamp) {
        return;
      }
      const isClickOutside = event.target !== element && !element.contains(event.target);
      if (!isClickOutside) {
        return;
      }
      handlerValue(event);
    };
    handlers.push([eventName, handler]);
    document.documentElement.addEventListener(eventName, handler, useCapture);
  });
  return () => {
    handlers.forEach(([eventName, handler]) => {
      document.documentElement.removeEventListener(eventName, handler, useCapture);
    });
  };
}, {
  eager: false
});

export { clickOutside as default };
//# sourceMappingURL=click-outside.js.map
