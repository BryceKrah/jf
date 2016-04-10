'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;


const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Jessica Fooskas Make Up Artist</h1>
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.querySelector('#container'));
