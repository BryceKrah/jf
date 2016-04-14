'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Nav = require('./nav.js');

const About = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <div className="title">jessica fooskas</div>
        <div className="container">
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="pic-1"></div>
        </div>
      </div>
    )
  }
})

module.exports = About;
