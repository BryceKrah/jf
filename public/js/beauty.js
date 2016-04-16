'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Nav = require('./nav.js');
const Footer = require('./footer.js')

const Beauty = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <h1>beauty stuff</h1>
        <Footer />
      </div>
    )
  }
})

module.exports = Beauty;
