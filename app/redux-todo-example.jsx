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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
var currentState = store.getState();
console.log(currentState);

store.subscribe(()=>{
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Coder'
});
// console.log('searchText should be "Hey Coder"', store.getState());

store.dispatch({
  type:'CHANGE_SEARCHTEXT',
  searchText: 'Work'
});

store.dispatch({
  type:'CHANGE_SEARCHTEXT',
  searchText: 'Gym'
});
