import { Routes, Route, Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

export const Header = (props) => {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        <img
          src={headerLogo}
          alt='Mesto Russia'
          lang='en'
          className='header__logo'
        />
      </Link>
      <div className='header__wrapper'>
        {props.userEmail && <p className='header__text'>{props.userEmail}</p>}
        <Routes>
          <Route
            path='/'
            element={
              <button
                className='header__button header__button_logout'
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
    </header>
  );
};
