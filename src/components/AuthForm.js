import { Link, useLocation } from 'react-router-dom';

export const AuthForm = (props) => {
  const location = useLocation();

  return (
    <div className='auth'>
      <form
        name={props.name}
        className='auth__form'
        noValidate
        onSubmit={props.onSubmit}>
        <legend className='auth__legend'>{props.legendText}</legend>
        {props.children}
        <button type='submit' className='auth__submit'>
          {props.submitText}
        </button>
        {location.pathname === '/sign-up' && (
          <p className='auth__text'>
            Уже зарегистрированы?{' '}
            <Link to='/sign-in' className='auth__link '>
              Войти
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};
