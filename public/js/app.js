'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const Nav = require('./nav.js')
const Contact = require('./contact.js')
const Bridal = require('./bridal.js')
const Beauty = require('./beauty.js')
const About = require('./about.js')


const App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="about" component={About}/>
    <Route path="beauty" component={Beauty}/>
    <Route path="bridal" component={Bridal}/>
    <Route path="contact" component={Contact}/>

  </Router>
), document.querySelector('#container'));
