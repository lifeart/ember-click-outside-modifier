import type ClickOutsideModifier from './modifiers/click-outside';

export default interface EmberClickOutsideRegistry {
  'click-outside': typeof ClickOutsideModifier;
}
