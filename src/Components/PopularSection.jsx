import React from 'react';
import '../Sass/PopularSection.scss';
import Popular from '../Data/PopularData';

function PopularSection() {
  return (
    <div className="popular">
      <div className="popular__title-box">
        <h1 className="popular__header">
          Popular right now
          <span>
            <em style={{ color: 'grey', fontWeight: '200' }}>Team kit</em>
          </span>
        </h1>
        <p className="popular__subtitle">
          Indispensable classics ― browse our range to discover
          top-of-the-league products!
        </p>
      </div>

      <div className="popular__card-container">
        <div className="popular__card-box">
          {Popular.map((teams, idx) => {
            return (
              <article key={idx} className="popular__card">
                <img className="popular__card-img" src={teams.img} alt="" />
                <p className="popular__card-title">{teams.title}</p>
              </article>
            );
          })}
        </div>

        <div className="btn-container">
          <button className="see-more">See More</button>
        </div>
      </div>
    </div>
  );
}

export default PopularSection;
