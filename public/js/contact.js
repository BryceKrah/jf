'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Nav = require('./nav.js');



const Contact = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <h1>phonenumber</h1>
      </div>
    )
  }
})

module.exports = Contact;
