'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Nav = React.createClass({

  render: function(){
    return (
      <div className="navbar">
        <span className="left-nav">
          <Link to="/">Jessica Fooskas</Link>
        </span>
        <span className="right-nav">
          <Link to="/about">About</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/bridal">Bridal</Link>
          <Link to="/contact">Contact</Link>
        </span>
      </div>
    )
  }
})

module.exports = Nav;
