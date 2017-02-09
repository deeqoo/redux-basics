var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  todos: [],
  showCompleted: false
};

var reducer = (state = stateDefault, action)=> {
  return state;
}

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log(currentState);
