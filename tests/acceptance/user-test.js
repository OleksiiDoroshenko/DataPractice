import {module, test} from 'qunit';
import {visit, currentURL, click} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | user', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /users', async function (assert) {
    await visit('/users');
    assert.equal(currentURL(), '/users');

    let button = this.element.querySelector('[data-cs="toggleBtn"]');
    assert.strictEqual(button.textContent, 'Show', 'Should render button with proper label.');

    await click('button', '[data-cs="toggleBtn"]');

    assert.strictEqual(button.textContent, 'Hide', 'Should render button with proper label after clicking.');

    const userList = this.element.querySelector('[data-cs="user-list"]');
    assert.strictEqual(userList.children.length, 2, 'Should render user list after button click.')
  });

});
