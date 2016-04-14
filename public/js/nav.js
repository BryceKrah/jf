'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Nav = React.createClass({

  render: function(){
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="/bridal">Bridal</Link>
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
})

module.exports = Nav;
