ember-click-outside-modifier
==============================================================================

Ember modifier to react on clicks outside an element without stopping the event propagation. Great for closing dialogues, menus among other things.

If you need more control on click outside - take a look at [ember-click-outside](https://github.com/zeppelin/ember-click-outside)

Inspired by [v-click-outside](https://github.com/ndelvalle/v-click-outside)

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v12 or above


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


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
