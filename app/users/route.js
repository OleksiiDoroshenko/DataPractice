import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [
        {
          id: '1',
          type: 'user',
          attributes: {
            name: 'Alex',
            books: [
              {
                id:'1',
                type:'book',
                attributes:{
                  name: 'book 1',
                }
              },
              {
                id:'2',
                type:'book',
                attributes:{
                  name: 'book 2',
                }
              },
            ]
          }
        },
        {
          id: '2',
          type: 'user',
          attributes: {
            name: 'Dima',
            books: [
              {
                name: 'book 1',
              },
              {
                name: 'book 2',
              }
            ]
          }
        }
      ]
    });

    return this.store.peekAll('user');
  }
});
