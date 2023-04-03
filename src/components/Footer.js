function Footer() {
  return (
    <footer className='footer'>
      <p lang='en' className='footer__copyright'>
        © 2022-{new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  );
}

export default Footer;
