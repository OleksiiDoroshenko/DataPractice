import Controller from '@ember/controller';
import {computed} from '@ember/object'

export default Controller.extend({
  isExpanded: false,

  label: computed('isExpanded', function () {
    return this.isExpanded ? 'Hide' : 'Show';
  }),

  actions: {
    toggleUsers() {
      this.toggleProperty('isExpanded')
    }
  }

});
