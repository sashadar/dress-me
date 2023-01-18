import React from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const currentPage = useSelector((state) => state.currentSet.currentPage);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className='header'>
      <NavLink className='header__title' to='/home'>
        DressMe
      </NavLink>
      <h1
        className={`header__page-title ${
          isMenuOpen ? 'header__page-title_left' : ''
        }`}
      >
        {currentPage}
      </h1>
      <button
        className='header__menu-button header__menu-button_action_open'
        onClick={handleMenuOpen}
        type='button'
      ></button>

      <div
        className={`header__navigation-menu ${
          isMenuOpen ? 'header__navigation-menu_visible' : ''
        }`}
      >
        <button
          className='header__menu-button header__menu-button_action_close'
          onClick={handleMenuClose}
          type='button'
        ></button>
        <nav>
          <ul className='header__navigation-list'>
            <li className='header__navigation-list-item'>
              <NavLink className='header__navigation-link' to='/home'>
                Home
              </NavLink>
            </li>
            <li className='header__navigation-list-item'>
              <NavLink className='header__navigation-link' to='/items'>
                Items
              </NavLink>
            </li>

            <li className='header__navigation-list-item'>
              <NavLink className='header__navigation-link' to='/saved-sets'>
                Saved Sets
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
