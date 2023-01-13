import React from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className='header'>
      <a className='header__title' href='/'>
        DressMe
      </a>
      <h1
        className={`header__page-title ${
          isMenuOpen ? 'header__page-title_left' : ''
        }`}
      >
        Saved sets
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
              <a className='header__navigation-link' href='/home'>
                Home
              </a>
            </li>
            <li className='header__navigation-list-item'>
              <a className='header__navigation-link' href='/items'>
                Items
              </a>
            </li>

            <li className='header__navigation-list-item'>
              <a className='header__navigation-link' href='/saved-sets'>
                Saved Sets
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
