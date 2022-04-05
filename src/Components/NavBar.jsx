import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Sass/Navbar.scss';
import HelpData from '../Data/HelpData';
import logo from '../Images/logo-black.svg';
import { BiMenu } from 'react-icons/bi';
import NavData from '../Data/MenuData';
import { useGlobalContext } from '../Data/content';
import { ImLocation2 } from 'react-icons/im';
import { BiCaretDown } from 'react-icons/bi';
import { motion } from 'framer-motion';

function NavBar() {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    openSubMenu(page, { center });
  };

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('nav__mainNav-link')) {
      closeSubMenu();
    }
  };

  return (
    <motion.div
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', stiffness: 100, delay: 1, duration: 1 }}
      onMouseOver={handleSubMenu}
    >
      <div className="nav__topNav">
        <p className="nav__topNav-txt">Providing service international</p>
        <p className="nav__topNav-txt">Fast Reliable and professional</p>
      </div>
      <div className="nav__helpbar">
        {HelpData.map((data, idx) => {
          return (
            <Link key={idx} to={data.url} className="nav__helpbar-links">
              {data.label}
            </Link>
          );
        })}
      </div>
      <div className="nav__mainNav">
        <div className="nav__mainNav-hamburger" onClick={openSidebar}>
          <BiMenu />
        </div>
        <img className="nav__mainNav-logo" src={logo} alt="logo" />
        <ul className="nav__mainNav-menu">
          <NavLink to={'/t'} className="nav__mainNav-btn">
            Home
          </NavLink>
          {NavData.map((data, idx) => {
            return (
              <li className="nav__mainNav-item">
                <NavLink
                  key={idx}
                  to={data.url}
                  className="nav__mainNav-link"
                  onMouseOver={displaySubMenu}
                >
                  {data.page}
                </NavLink>
                <BiCaretDown />
              </li>
            );
          })}
          <NavLink to={'/p'} className="nav__mainNav-btn">
            Latest
          </NavLink>
          <NavLink to={'/l'} className="nav__mainNav-btn">
            Offers
          </NavLink>
        </ul>

        <div className="nav__mainNav-location-con">
          <h1 className="nav__mainNav-contact">+220 582 7425</h1>
          <Link to={'/k'} className="nav__mainNav-location-icon">
            <ImLocation2 />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default NavBar;
