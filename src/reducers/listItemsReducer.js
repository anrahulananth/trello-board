const listItemsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
        case 'REMOVE_LIST_ITEM':
          const {
            listId,
            data
          } = action.payload;
          let items = [];
          if (action.type.includes('ADD')) {
            items = state[listId] ? [data, ...state[listId]] : [data];
          } else {
            items = state[listId].filter((listItem) => listItem.id !== data);
          }
          const listItems = {
            ...state,
            [listId]: items,
          };
          localStorage.setItem('listItems', JSON.stringify(listItems));
          return listItems;
        case 'SET_LIST_ITEM':
          return action.payload;
        default:
          return state;
    }
};

export default listItemsReducer;