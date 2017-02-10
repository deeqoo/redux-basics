var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  todos: [],
  showCompleted: false
};

var reducer = (state = stateDefault, action)=> {
  console.log('New searchText', action);
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
}

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log(currentState);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Hey Coder'
});
console.log('searchText should be "Hey Coder"', store.getState());
