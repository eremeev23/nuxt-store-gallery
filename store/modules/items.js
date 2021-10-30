export default {
  actions: {
  },

  mutations: {
    addNewItem: (state, item) => {
      state.items.push(item)
    },
    deleteItem: (state, id) => {
      for (let i = 0; i < state.items.length; i++) {
        if (id == state.items[i].id) {
          state.items.splice(i, 1);
        }
      }
    },
    sortItems: (state, key) => {
      if (key === 'min') {
        state.items.sort((itemA, itemB) => {
          let priceA = itemA.price;
          let priceB = itemB.price;
          priceA = priceA.split(' ').join('')
          priceB = priceB.split(' ').join('')
          return priceA - priceB
        })
      }
      if (key === 'max') {
        state.items.sort((itemA, itemB) => {
          let priceA = itemA.price;
          let priceB = itemB.price;
          priceA = priceA.split(' ').join('')
          priceB = priceB.split(' ').join('')
          return priceB - priceA
        })
      }
      if(key === 'default') {
        state.items.sort((itemA, itemB) => itemA.id - itemB.id)
      }
    },
  },

  state: {
    items: [
      {
        id: 1,
        name: 'Наименование товара',
        price: '10 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 2,
        name: 'Наименование товара',
        price: '11 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 3,
        name: 'Наименование товара',
        price: '12 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 4,
        name: 'Наименование товара',
        price: '10 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 5,
        name: 'Наименование товара',
        price: '10 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 6,
        name: 'Наименование товара',
        price: '10 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 7,
        name: 'Наименование товара',
        price: '9 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 8,
        name: 'Наименование товара',
        price: '10 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
      {
        id: 9,
        name: 'Наименование товара',
        price: '10 000',
        image: '/assets/images/image.png',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.'
      },
    ]
  },

  getters: {
    getItems: (state) => state.items
  },
}