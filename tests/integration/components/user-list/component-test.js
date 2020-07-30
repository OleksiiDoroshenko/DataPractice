import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-list', function (hooks) {

  setupRenderingTest(hooks);

  test('it renders correct number if children', async function (assert) {
    const childrenNumber = 3;
    const users = _createUsers(childrenNumber);
    this.set('users', users)

    await render(hbs`{{user-list users=users}}`);

    let element = this.element.querySelector('[data-cs="user-list"]');
    assert.strictEqual(element.children.length, childrenNumber, 'Should render proper number of children.');
  });


  function _createUsers(number) {
    let users = [];
    for (let i = 0; i < number; i++) {
      users.push({id: i, name: i, type: 'user'})
    }
    return users;
  }
});
