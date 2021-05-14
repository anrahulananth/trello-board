const listReducer = (state = [], action) => {
    let lists = []; 
    switch (action.type) {
        case 'ADD_LIST':
          lists = [
            action.payload,
            ...state,
          ];
          localStorage.setItem('lists', JSON.stringify(lists));
          return lists;
        case 'REMOVE_LIST':
          lists = state.filter((list) => list.id !== action.payload);
          localStorage.setItem('lists', JSON.stringify(lists));
          return lists;
        case 'ADD_LIST_ITEM':
        case 'REMOVE_LIST_ITEM':
          lists = [...state];
          const {
            listId,
            data
          } = action.payload;
          const listIndex = lists.findIndex((listData) => listData.id === listId);
          const [list] = lists.splice(listIndex, 1);
          if (action.type.includes('ADD')) {
            list.items = [data, ...list.items];
          } else {
            list.items = list.items.filter((listItem) => listItem.id !== data);
          }
          lists.splice(listIndex, 0, list);
          localStorage.setItem('lists', JSON.stringify(lists));
          return lists;
        case 'SET_LIST':
          return action.payload
        default:
          return state
    }
};

export default listReducer;