import React from 'react';
import '../Sass/Landing.scss';
import { useGlobalContext } from '../Data/content';
import ServiceInfo from './ServiceInfo';

function Landing() {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className="landing" onMouseOver={closeSubMenu}>
      <div className="landing__container">
        <h2 className="landing__headerOne">Find your perfect </h2>
        <h1 className="landing__headerTwo"> sport kit</h1>
        <p className="landing__subheader">
          Give your team a new look with exclusive team outfits.
        </p>
      </div>
      <div className="service-container">
        <div className="service-box">
          <ServiceInfo />
        </div>
      </div>
      <div className="giff">
        <h1 className="giff__txt">
          smart sportwear that bring your performance to a higher level.
        </h1>
        <iframe
          className="levelupgiff"
          src="https://giphy.com/embed/St3iie3VZ65VHkobqc"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Landing;
