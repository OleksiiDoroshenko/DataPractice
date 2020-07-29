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
          },
          relationships: {
            books: {
              data: [{
                id: '1',
                type: 'book'
              }, {
                id: '2',
                type: 'book'
              }, {
                id: '3',
                type: 'book'
              }]
            }
          }
        },
        {
          id: '2',
          type: 'user',
          attributes: {
            name: 'Dima',
          },
          relationships: {
            books: {
              data: [{
                id: '4',
                type: 'book'
              }, {
                id: '5',
                type: 'book'
              }, {
                id: '6',
                type: 'book'
              }]
            }
          }
        },
      ],
      included: [
        {
          id: '1',
          type: 'book',
          attributes: {
            name: 'Book 1'
          }
        },
        {
          id: '2',
          type: 'book',
          attributes: {
            name: 'Book 2'
          }
        }, {

          id: '3',
          type: 'book',
          attributes: {
            name: 'Book 3'
          }
        },
        {
          id: '4',
          type: 'book',
          attributes: {
            name: 'Book 4'
          }
        },
        {
          id: '5',
          type: 'book',
          attributes: {
            name: 'Book 5'
          }
        }, {

          id: '6',
          type: 'book',
          attributes: {
            name: 'Book 6'
          }
        },
      ]
    });

    return this.store.peekAll('user');
  }
});
