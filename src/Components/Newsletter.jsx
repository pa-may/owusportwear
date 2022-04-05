import React from 'react';
import '../Sass/newsletter.scss';

function Newsletter() {
  return (
    <div className="newsletter-container">
      <form className="newsletter">
        <div className="newsletter__con">
          <h1 className="newsletter__header">Subscribe to our newsletter</h1>
          <h2 className="newsletter__title">
            Get news and offers from owu sportswear
          </h2>
          <p className="newsletter__text">
            Get regular updates and keep updated with all the latest news from
            owu sportswear. Your email will be safe and secure.
          </p>
        </div>

        <div className="newsletter__input-con">
          <input
            className="newsletter__input"
            name="email"
            type="text"
            placeholder="email@123.com"
          />
          <button className="newsletter__btn">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
