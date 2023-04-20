import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onRegister({
      email: userData.email,
      password: userData.password,
    });
  };

  return (
    <div className='auth'>
      <form name='register' id='register-form' className='auth__form'>
        <legend className='auth__legend'>Регистрация</legend>
        <fieldset className='auth__fieldset'>
          <label className='auth__label'>
            <input
              type='email'
              name='email'
              value={userData.email}
              placeholder='Email'
              className='auth__input'
              required
              onChange={handleChange}
            />
            <span className='auth__error'></span>
          </label>
          <label className='auth__label'>
            <input
              type='password'
              name='password'
              value={userData.password}
              placeholder='Пароль'
              className='auth__input'
              required
              onChange={handleChange}
            />
            <span className='auth__error'></span>
          </label>
        </fieldset>
        <button type='submit' className='auth__submit' onClick={handleSubmit}>
          Зарегистрироваться
        </button>
      </form>
      <p className='auth__text'>
        Уже зарегистрированы?{' '}
        <Link to='/sign-in' className='auth__link '>
          Войти
        </Link>
      </p>
    </div>
  );
};
