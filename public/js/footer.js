'use strict';
const React = require('react');
const ReactRouter = require('react-router');

const Footer = React.createClass({

  render: function(){
    return (
      <footer className="footer">
        <span className="right-nav">
          <a href={"https://www.instagram.com"}><img className="icon" src='../icon_imgs/instagram.png' /></a>
          <a href={"https://www.facebook.com"}><img className="icon" src='../icon_imgs/facebook.png' /></a>
          <a href={"https://www.pinterest.com"}><img className="icon" src='../icon_imgs/pinterest.png' /></a>
          <a href={"https://www.twitter.com"}><img className="icon" src='../icon_imgs/twitter.png' /></a>
        </span>
      </footer>
    )
  }
})

module.exports = Footer;
