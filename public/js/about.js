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
        <h1>about jessica</h1>
      </div>
    )
  }
})

module.exports = About;
