import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.createRecord('user', {
      name: 'Alex',
      books: [
        this.store.createFragment('book', {name: 'Book 1'}),
        this.store.createFragment('book', {name: 'Book 2'}),
      ]
    });

    this.store.createRecord('user', {
      name: 'Dima',
      books: [this.store.createFragment('book', {name: 'Book 2'})]
    })
    const records = this.store.peekAll('user');
    debugger;

    return new Promise((resolve) => {
      debugger;
      return resolve(records)
    });
  },

  actions: {
    loading(transition) {
      debugger
      let start = new Date();
      transition.promise.finally(() => {
        alert(`Took ${new Date - start}ma to load`);
      });
      return true;
    }
  }
});
