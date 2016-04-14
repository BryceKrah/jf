'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Nav = require('./nav.js');

const Beauty = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <h1>beauty stuff</h1>
      </div>
    )
  }
})

module.exports = Beauty;
