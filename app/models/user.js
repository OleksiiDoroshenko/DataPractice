import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import {
  fragmentArray,
} from 'ember-data-model-fragments/attributes';

export default Model.extend({
  name: attr('string'),
  books: fragmentArray('book')
});
