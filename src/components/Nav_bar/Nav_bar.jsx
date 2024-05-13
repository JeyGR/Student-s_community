import React from "react";
import { Like, ProfileImg, logo, menuBarIcon, searchIcon } from "../../assets";
import "./Nav_bar.css";
const Nav_bar = () => {
  return (
    <div className="navbarTop">
      <div className="navdiv">
        <div className="navLogo">
          <img src={logo} alt="Profile" className="navLogo" />
        </div>
        <div className="navSearch">
          <img src={searchIcon} className="nav_searchimg" />
          <input type="text" placeholder="Explore !" />
        </div>
        <div className="navright">
          <img src={ProfileImg} alt="Profile" className="nav_rightProfile" />
          <img src={menuBarIcon} alt="Menubar" className="nav_rightmenu" />
        </div>
      </div>
    </div>
  );
};

export default Nav_bar;
