import Component from '@ember/component';
import {computed} from '@ember/object';


export default Component.extend({

  renderUsers: computed('users.[]', function () {
    debugger;
    return this.users;
  })
});
