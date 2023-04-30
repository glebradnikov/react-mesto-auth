import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

export const Header = (props) => {
  const [IsBurgerMenuPopupOpen, setIsBurgerMenuPopupOpened] = useState(false);
  const location = useLocation();

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuPopupOpened(!IsBurgerMenuPopupOpen);
  };

  return (
    <header className='header'>
      {IsBurgerMenuPopupOpen && (
        <div className='header__burger-menu burger-menu'>
          {props.email && <p className='burger-menu__text'>{props.email}</p>}
          <button
            className='burger-menu__button'
            onClick={() => {
              props.onSignOut();
            }}>
            Выйти
          </button>
        </div>
      )}

      <div className='header__container'>
        <Link to='/' className='header__link'>
          <img
            src={headerLogo}
            alt='Mesto Russia'
            lang='en'
            className='header__logo'
          />
        </Link>
        <div
          className={`header__wrapper ${
            location.pathname === '/' ? 'header__wrapper_inactive' : ''
          }`}>
          {props.email && <p className='header__text'>{props.email}</p>}
          <Routes>
            <Route
              path='/'
              element={
                <button
                  className='header__button header__button_signout'
                  onClick={() => {
                    props.onSignOut();
                  }}>
                  Выйти
                </button>
              }
            />
            <Route
              path='/sign-in'
              element={
                <Link to='/sign-up' className='header__button'>
                  Регистрация
                </Link>
              }
            />
            <Route
              path='/sign-up'
              element={
                <Link to='/sign-in' className='header__button'>
                  Войти
                </Link>
              }
            />
          </Routes>
        </div>
        {location.pathname === '/' && (
          <button
            className={`header__burger-menu-button ${
              IsBurgerMenuPopupOpen
                ? 'header__burger-menu-button_type_close'
                : ''
            }`}
            onClick={() => {
              handleBurgerMenuClick();
            }}>
            <span></span>
          </button>
        )}
      </div>
    </header>
  );
};
