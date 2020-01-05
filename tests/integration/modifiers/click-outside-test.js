import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | click-outside', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('simple case', async function(assert) {
    let outsideClicked = false;
    this.set('onClickOutside',()=>{
      outsideClicked = true;
    });
    await render(hbs`<div class="outside"></div><div {{click-outside this.onClickOutside}} class="inside"></div>`);
    assert.ok(true);
    await click('.inside');
    assert.equal(outsideClicked, false);
    await click('.outside');
    assert.equal(outsideClicked, true);
  });
  test('nested case', async function(assert) {
    let outsideClicked = false;
    this.set('onClickOutside',()=>{
      outsideClicked = true;
    });
    await render(hbs`<div class="outside"></div><div {{click-outside this.onClickOutside}}><div  class="inside"></div></div>`);
    assert.ok(true);
    await click('.inside');
    assert.equal(outsideClicked, false);
    await click('.outside');
    assert.equal(outsideClicked, true);
  });
  test('wrapped case', async function(assert) {
    let outsideClicked = false;
    this.set('onClickOutside',()=>{
      outsideClicked = true;
    });
    await render(hbs`<div class="outside"><div {{click-outside this.onClickOutside}}><div class="inside"></div></div></div>`);
    assert.ok(true);
    await click('.inside');
    assert.equal(outsideClicked, false);
    await click('.outside');
    assert.equal(outsideClicked, true);
  });
  // test('error case', async function(assert) {
  //   try {
  //     await render(hbs`<div class="outside"><div {{click-outside this.fff}}><div class="inside"></div></div></div>`);
  //   } catch(e) {
  //     assert.equal(e.toString(), 'Error: {{click-outside}}: Binding value must be a function');
  //   }
  // });
});
