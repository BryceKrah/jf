'use strict';
const React = require('react');
const Slider = require('react-slick');

class LeftNavButton extends React.Component {
  render() {
    return <button {...this.props}>Previous</button>
  }
}
class RightNavButton extends React.Component {
  render() {
    return <button {...this.props}>Next</button>
  }
}


const HomeSlider = React.createClass({

  render: function(){
    let settings = {
      dots: true,
      nextArrow: RightNavButton,
      prevArrow: LeftNavButton,
      fade: true,
      autoplay: true

    };
    return (
      <div className="slide-container">
        <Slider {...settings}>
          <img src='http://lcc1009.cias.rit.edu/256/homework1/images/frenchypup.jpg' />
          <img src='http://lcc1009.cias.rit.edu/256/homework1/images/frenchy.jpg' />
          <img src='http://previews.123rf.com/images/ivonnewierink/ivonnewierink1403/ivonnewierink140300315/26969955-French-bulldog-standing-in-studio-on-beige-background-Stock-Photo.jpg' />
          <img src='https://s-media-cache-ak0.pinimg.com/736x/00/69/b3/0069b3c694a14e48bdc16bfc21ee40d4.jpg' />
        </Slider>
      </div>
    )
  }
})

module.exports = HomeSlider;
