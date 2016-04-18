'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Nav = require('./nav.js');
const Footer = require('./footer.js')
const Coverflow = require('react-coverflow')


const Beauty = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <h1>Beauty Portfolio</h1>
        <Coverflow width="960" height="500"
          displayQuantityOfSide={1}
          navigation={true}
          enableScroll={true}
        >
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://lcc1009.cias.rit.edu/256/homework1/images/frenchy.jpg' alt='title or description' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://lcc1009.cias.rit.edu/256/homework1/images/frenchy.jpg' alt='title or description' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://lcc1009.cias.rit.edu/256/homework1/images/frenchy.jpg' alt='title or description' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          <img src='http://lcc1009.cias.rit.edu/256/homework1/images/frenchy.jpg' alt='title or description' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' alt='Frenchie pup' />
          </Coverflow>
        <Footer />
      </div>
    )
  }
})

module.exports = Beauty;
