import React, { useState } from 'react';
import '../Sass/Sidebar.scss';
import SubLinks from '../Data/MenuData';
import SidebarItems from './SidebarItems';
import SocialLinks from '../Components/SocialLinks';
import logo from '../Images/logo-white.svg';
import { GrFormClose } from 'react-icons/gr';
import { useGlobalContext } from '../Data/content';

function SideBar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar__con">
        <img className="sidebar__logo" src={logo} alt="logo" />
        <span>
          <GrFormClose className="sidebar__close-btn" onClick={closeSidebar} />
        </span>
      </div>
      <div className="sidebar__header">
        <h1>+200 582 7425</h1>
        <h1>+200 294 5006</h1>
      </div>
      <br />
      <br />
      {SubLinks.map((items, idx) => {
        return <SidebarItems key={idx} items={items} className="sidebar " />;
      })}
      <br />
      <br /> <br />
      <br />
      <SocialLinks />
    </div>
  );
}

export default SideBar;
