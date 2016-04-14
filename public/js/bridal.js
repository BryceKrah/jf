'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Nav = require('./nav.js');

const Bridal = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <h1>bridal stuff</h1>
      </div>
    )
  }
})

module.exports = Bridal;
