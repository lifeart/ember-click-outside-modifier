import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | click-outside', function (hooks) {
  setupRenderingTest(hooks);

  test('simple case', async function (assert) {
    let outsideClicked = false;
    this.set('onClickOutside', () => {
      outsideClicked = true;
    });
    await render(
      hbs`<div class="outside"></div><div {{click-outside this.onClickOutside}} class="inside"></div>`,
    );
    assert.ok(true);
    await click('.inside');
    assert.false(outsideClicked);
    await click('.outside');
    assert.true(outsideClicked);
  });

  test('nested case', async function (assert) {
    let outsideClicked = false;
    this.set('onClickOutside', () => {
      outsideClicked = true;
    });
    await render(
      hbs`<div class="outside"></div><div {{click-outside this.onClickOutside}}><div  class="inside"></div></div>`,
    );
    assert.ok(true);
    await click('.inside');
    assert.false(outsideClicked);
    await click('.outside');
    assert.true(outsideClicked);
  });

  test('wrapped case', async function (assert) {
    let outsideClicked = false;
    this.set('onClickOutside', () => {
      outsideClicked = true;
    });
    await render(
      hbs`<div class="outside"><div {{click-outside this.onClickOutside}}><div class="inside"></div></div></div>`,
    );
    assert.ok(true);
    await click('.inside');
    assert.false(outsideClicked);
    await click('.outside');
    assert.true(outsideClicked);
  });

  test('it does not capture preceding events', async function (assert) {
    let outsideClicked = false;
    this.set('onClickOutside', () => {
      outsideClicked = true;
    });
    this.set('show', false);
    this.set('onClick', () => {
      this.set('show', true);
    });
    await render(
      hbs`
        <button type="button" {{on "click" this.onClick}}>Show</button>
        {{#if this.show}}<div class="outside"></div><div {{click-outside this.onClickOutside}} class="inside"></div>{{/if}}
      `,
    );
    assert.ok(true);
    await click('button');
    assert.false(outsideClicked);
  });

  module('configurable event bindings', function () {
    test('single event', async function (assert) {
      let outsideClicked = false;
      this.set('onClickOutside', () => {
        outsideClicked = true;
      });
      await render(
        hbs`<div class="outside"><div {{click-outside this.onClickOutside event="mouseup"}}><div class="inside"></div></div></div>`,
      );
      assert.ok(true);
      await triggerEvent('.inside', 'mouseup');
      assert.false(outsideClicked);
      await triggerEvent('.outside', 'mouseup');
      assert.true(outsideClicked);
    });

    test('multiple events', async function (assert) {
      let outsideClicked = 0;
      this.set('onClickOutside', () => {
        outsideClicked++;
      });
      await render(
        hbs`<div class="outside"><div {{click-outside this.onClickOutside events=(array "mouseup" "click")}}><div class="inside"></div></div></div>`,
      );
      assert.ok(true);
      await triggerEvent('.inside', 'mouseup');
      await triggerEvent('.inside', 'click');
      assert.strictEqual(outsideClicked, 0);
      await triggerEvent('.outside', 'mouseup');
      await triggerEvent('.outside', 'click');
      assert.strictEqual(outsideClicked, 2);
    });
  });

  test.skip('error case', async function (assert) {
    try {
      await render(
        hbs`<div class="outside"><div {{click-outside this.fff}}><div class="inside"></div></div></div>`,
      );
    } catch (e) {
      assert.equal(
        e.toString(),
        'Error: {{click-outside}}: Binding value must be a function',
      );
    }
  });
});
