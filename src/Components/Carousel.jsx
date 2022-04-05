import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick/lib/slider';
import '../Sass/Carousel.scss';

const photos = [
  { url: require('../Images/slideImg1.jpg') },
  { url: require('../Images/slideImg2.jpg') },
  { url: require('../Images/slideImg6.jpg') },
  { url: require('../Images/slideImg3.jpg') },
  { url: require('../Images/slideImg4.png') },
  { url: require('../Images/supreme-court-fc.png') },
];

class Carousel extends Component {
  render() {
    const settings = {
      className: 'carousel',
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {photos.map((photo, idx) => {
            return (
              <div key={idx}>
                <img
                  key={idx}
                  className="carousel__img"
                  src={photo.url}
                  alt="slide"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
