import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Data/content';

function SubMenu() {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center } = location;
    submenu.style.left = `${center}px`;
  }, [location, links]);

  return (
    <aside
      className={`${isSubMenuOpen ? 'submenu show ' : 'submenu'}`}
      ref={container}
    >
      <h1 className="submenu-title">{page}</h1>
      <div className="submenu-center ">
        <div className="submenu-items">
          {links.map((link, idx) => {
            const { label, url } = link;
            return (
              <Link to={url} key={idx} className="submenu-links">
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default SubMenu;
