import React from 'react';
import '../Sass/LastestNav.scss';

function LatestNav() {
  return (
    <section>
      <nav className="latestNav">
        <span className="latestNav__txt">LATEST</span>
        <span className="latestNav__container">
          <span className="latestNav__links">football</span>
          <span className="latestNav__links">football</span>
          <span className="latestNav__links">football</span>
        </span>
      </nav>
    </section>
  );
}

export default LatestNav;
