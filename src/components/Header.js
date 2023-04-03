import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className='header'>
      <a href='#' className='header__link'>
        <img
          src={headerLogo}
          alt='Mesto Russia'
          lang='en'
          className='header__logo'
        />
      </a>
    </header>
  );
}

export default Header;
