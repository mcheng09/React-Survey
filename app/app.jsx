var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Survey = require('Survey');
var Results = require('Results');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Survey} />
      <Route path="/results" component={Results} />
    </Route>
  </Router>,
  document.getElementById('app')
);
