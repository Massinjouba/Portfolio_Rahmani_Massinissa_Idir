import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'; // Importe le fichier de style CSS
import MobileNav from './MobileNav/MobileNav.jsx';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ setIsOpenPopup }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleRateMeClick = () => {
    setIsOpenPopup(true);
  };

  return (
    <>
      <MobileNav 
        isOpen={openMenu} 
        toggleMenu={toggleMenu} 
        handleRateMeClick={handleRateMeClick} 
      />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <h1 className='logo'>Dev-Folio</h1>
          <ul>
            <li>
              <HashLink smooth to='/#section1' className='menu-item'>Home</HashLink>
            </li>
            <li>
              <HashLink smooth to='/#section2' className='menu-item'>Skills</HashLink>
            </li>
            <li>
              <HashLink smooth to='/#section3' className='menu-item'>Projects</HashLink>
            </li>
            <li>
              <Link to='/contact' className='menu-item'>Contact me</Link>
            </li>
            <li>
              <Link to='/rate' className='menu-item'>FeedBacks</Link>
            </li>
            <button className='contact-btn' onClick={handleRateMeClick}>Rate me</button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span className={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
              {openMenu ? "close" : "menu"}
            </span>
          </button> 
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  setIsOpenPopup: PropTypes.func.isRequired
};

export default Navbar;
