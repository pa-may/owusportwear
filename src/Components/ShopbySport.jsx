import React from 'react';
import '../Sass/Shopby.scss';
import { Link, NavLink } from 'react-router-dom';
import ShopbySport from './../Data/ShopByData';

function ShopbyNav() {
  return (
    <div className="shopbyNav">
      <h1 className="shopbyNav__header">Shop by sport</h1>
      <ul className="shopbyNav__items">
        {ShopbySport.map((sport, idx) => {
          const { title, url, icon } = sport;
          return (
            <li className="shopbyNav__list" key={idx}>
              <Link className="shopbyNav__links" to={url}>
                {title}
              </Link>
              <div className="sport-icon">{icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShopbyNav;
