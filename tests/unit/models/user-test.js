import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

const modelName = 'user';
const attributeSchema = {
  name: 'string',
  books: '-mf-fragment-array$book',
}


module('Unit | Model | user', function (hooks) {
  setupTest(hooks);

  test('model attributes must have expected data types', async function (assert) {

    let model = this.owner.lookup('service:store').modelFor(modelName);

    let actualAttributeSchema = {}
    model.eachAttribute((fieldName, meta) => {
      actualAttributeSchema[fieldName] = meta.type;
    })
    assert.deepEqual(actualAttributeSchema, attributeSchema, 'Actual attributes schema should match expected');
  });

});
