import React from 'react';
import { Link } from 'react-router-dom';
import '../Sass/Banners.scss';
import img1 from '../Images/home-board-wristband.png';
import img2 from '../Images/owu-jersey10.jpg';
import img3 from '../Images/slideImg6.jpg';
import img4 from '../Images/stadium.jpg';
import img5 from '../Images/slideImg1.jpg';

function Banner() {
  return (
    <div className="bannerThree">
      <div className="bannerThree__container">
        <p className="bannerThree__text">
          Get replicas of any of your favorite Nigerian teams
        </p>
        <br />
        <br />
        <Link to="" className="bannerThree__link">
          See more
        </Link>
      </div>
      <div className="bannerThree__col">
        <article className="bannerThree__rows span-2">
          <img className="bannerThree__img" src={img1} alt="" />
        </article>
        <article className="bannerThree__rows">
          <img className="bannerThree__img" src={img2} alt="" />
        </article>
        <article className="bannerThree__rows span-2-row">
          <img className="bannerThree__img" src={img3} alt="" />
        </article>
        <article className="bannerThree__rows ">
          <iframe
            className="kitgiff"
            src="https://giphy.com/embed/SVOXJs89ts0hyXXpi8"
          ></iframe>
        </article>
        <article className="bannerThree__rows span-2">
          <img className="bannerThree__img" src={img5} alt="" />
        </article>
      </div>
    </div>
  );
}

export default Banner;
