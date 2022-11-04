import React from 'react'
import d2d from "../Images/D2D.png";
import one from "../Images/d2d4 1.png";
import two from "../Images/d2d4 2.png";
import three from "../Images/d2d4 3.png";
import dot from "../Images/dots.png";
import left from "../Images/lp-left.png";
import right from "../Images/lp-right.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div id="header">
      <nav className="navigation container">
        <div className="nav-brand">
          <img className="nav-brand-logo" src={d2d} alt="logo" />
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link" href="#">Community</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">What's New</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">About</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <img className="header-dot" src={dot} alt="dot" />
      <header className="header container">
        <img className="left" src={left} alt="pic" />
        <div className="header-head">
          <div className="header-heading">
            Develop and Grow with D2D
          </div>
          <div className="header-text">
            A community for students, developers, designers, working professional and start-ups.
          </div>
          <hr className="header-line" />
        </div>
        <div className="header-body">
          <img className="header-img-1" src={one} alt="pic" />
          <img className="header-img-2" src={two} alt="pic" />
          <img className="header-img-3" src={three} alt="pic" />
        </div>
        <img className="right" src={right} alt="pic" />
      </header>
      
    </div>
  )
}

export default Header