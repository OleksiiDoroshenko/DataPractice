import attr from 'ember-data/attr';
import Fragment from 'ember-data-model-fragments/fragment';

export default Fragment.extend({
  name: attr('string'),
  type: attr('string', {defaultValue: 'book'})
});
