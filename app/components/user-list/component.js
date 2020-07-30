import Component from '@ember/component';
import {computed} from '@ember/object';


export default Component.extend({

  renderUsers: computed('users.[]', function () {
    return this.users;
  })
});
