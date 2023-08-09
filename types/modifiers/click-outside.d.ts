import Modifier from 'ember-modifier';

export interface ClickOutsideSignature {
  Element?: HTMLElement;
  Args: {
    Positional: [handlerValue: (event: Event) => unknown, useCapture?: boolean];
    Named:
      | never
      | {
          events?: string[];
        }
      | {
          event?: string;
        };
  };
}

export default class ClickOutsideModifier extends Modifier<ClickOutsideSignature> {}
