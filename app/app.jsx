var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


// Load founation
$(document).foundation();

// App csss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <h3>Learn Redux</h3>,
  document.getElementById("app")
);

// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
