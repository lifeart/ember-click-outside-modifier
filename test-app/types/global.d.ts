import '@glint/environment-ember-loose';

import type EmberClickOutsideRegistry from 'ember-click-outside-modifier/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  // Remove this once entries have been added! 👇
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export default interface Registry
    extends EmberClickOutsideRegistry /* other addon registries */ {
    // local entries
  }
}
