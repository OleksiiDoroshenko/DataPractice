import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

const modelName = 'book';
const attributeSchema = {
  name: 'string',
  type: 'string',
}
const values = {
  name: undefined,
  type: 'book',
}

module('Unit | Fragment | book', function (hooks) {
  setupTest(hooks);

  test('fragment attributes must have expected data types', async function (assert) {

    let model = this.owner.lookup('service:store').modelFor(modelName);

    let actualAttributeSchema = {}
    model.eachAttribute((fieldName, meta) => {
      actualAttributeSchema[fieldName] = meta.type;
    })
    assert.deepEqual(actualAttributeSchema, attributeSchema, 'Actual attributes schema should match expected');
  });

  test('fragment values must have expected default values', async function (assert) {

    let model = this.owner.lookup('service:store').createFragment(modelName, {});

    let actualValues = {};

    model.eachAttribute((fieldName) => {
      actualValues[fieldName] = model.get(fieldName);
    })
    assert.deepEqual(actualValues, values, 'Actual values schema should match expected');
  });

});
