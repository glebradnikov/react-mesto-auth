import { useState } from 'react';

export const Login = (props) => {
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

    props.onLogin({
      email: userData.email,
      password: userData.password,
      setUserData,
    });
  };

  return (
    <div className='auth auth_is-opened'>
      <form name='login' id='login-form' className='auth__form'>
        <legend className='auth__legend'>Вход</legend>
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
              className={`auth__error ${
                isValid.email ? '' : 'auth__error_active'
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
              className={`auth__error ${
                isValid.password ? '' : 'auth__error_active'
              }`}>
              {errors.password}
            </span>
          </label>
        </fieldset>
        <button type='submit' onClick={handleSubmit} className='auth__submit'>
          Войти
        </button>
      </form>
    </div>
  );
};
