import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = (props) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });
    setIsValid({
      ...isValid,
      [name]: event.target.checkValidity(),
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
              value={userData.email || ''}
              placeholder='Email'
              className={`auth__input ${
                isValid.email ? '' : 'auth__input_type_error'
              }`}
              required
              onChange={handleChange}
            />
            <span
              className={`popup__error ${
                isValid.email ? '' : 'popup__error_active'
              }`}>
              {errors.email}
            </span>
          </label>
          <label className='auth__label'>
            <input
              type='password'
              name='password'
              value={userData.password || ''}
              placeholder='Пароль'
              minLength='8'
              maxLength='128'
              className={`auth__input ${
                isValid.password ? '' : 'auth__input_type_error'
              }`}
              required
              onChange={handleChange}
            />
            <span
              className={`popup__error ${
                isValid.password ? '' : 'popup__error_active'
              }`}>
              {errors.password}
            </span>
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
