ember-click-outside-modifier
==============================================================================

Ember modifier to react on clicks outside an element without stopping the event propagation. Great for closing dialogues, menus among other things.

If you need more control on click outside - take a look at [ember-click-outside](https://github.com/zeppelin/ember-click-outside)

Inspired by [v-click-outside](https://github.com/ndelvalle/v-click-outside)

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v2.13 or above
* Embroider or ember-auto-import >= 2.0.0 (this is [v2 addon](https://emberjs.github.io/rfcs/0507-embroider-v2-package-format.html))


Installation
------------------------------------------------------------------------------

```
ember install ember-click-outside-modifier
```


Usage
------------------------------------------------------------------------------

```hbs
<div {{click-outside this.onClickOutside}}></div>
```

You can also provide specific events that you want to bind to with the `event` or `events` named arguments.

```hbs
<div {{click-outside this.onClickOutside event='mouseup'}}></div>
<div {{click-outside this.onClickOutside events=(array 'click' 'mouseup')}}></div>
```

## Usage with Glint

`ember-click-outside-modifier` is a glint enabled addon. Add this to your
`types/global.d.ts` file:

```ts
import '@glint/environment-ember-loose';

import type EmberClickOutsideRegistry from 'ember-click-outside-modifier/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmberClickOutsideRegistry, /* other addon registries */ {
    // local entries
  }
}
```

For the entire guide, please refer to [Using
Addons](https://typed-ember.gitbook.io/glint/environments/ember/using-addons#using-glint-enabled-addons)
section on the glint handbook.

Types are made available through package.json `exports` field.

## Usage with `<template>` tag

For usage in `gts` or `gjs` files, modifier are exported from the index:

```hbs
import { clickOutside } from 'ember-click-outside-modifier';

<template>
  <div {{clickOutside this.handleClickOutside}}>
    Lorem ipsum.
  </div>
</template>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
