import React from 'react';
import '../Sass/Banners.scss';
import { Link } from 'react-router-dom';

function BannerOne() {
  return (
    <div className="bannerOne">
      <Link className="bannerOne__btn" to={'/'}>
        Shop Now
      </Link>

      <h1>BANNER ONE / GET RELICA KIT </h1>
    </div>
  );
}

export default BannerOne;
