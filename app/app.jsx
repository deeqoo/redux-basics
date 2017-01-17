var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


// Load founation
$(document).foundation();

// App csss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <h3>React Boiler Plate, with Test</h3>,
  document.getElementById("app")
);
