import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './MobileNav.css';

function MobileNav({ isOpen, toggleMenu, handleRateMeClick }) {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
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
            <HashLink to='/contact' className='menu-item'>Contact me</HashLink>
          </li>
          <li>
            <HashLink to='/rate' className='menu-item'>FeedBacks</HashLink>
          </li>
          <button className='contact-btn' onClick={handleRateMeClick}>Rate me</button>
        </ul>
      </div>
    </div>
  );
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  handleRateMeClick: PropTypes.func.isRequired
};

export default MobileNav;
