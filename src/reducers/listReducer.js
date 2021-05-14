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
          const listItems = JSON.parse(localStorage.getItem('listItems'));
          delete listItems[action.payload];
          localStorage.setItem('listItems', JSON.stringify(listItems));
          return lists;
        case 'SET_LIST':
          return action.payload
        default:
          return state
    }
};

export default listReducer;