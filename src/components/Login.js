import { useState } from 'react';

export const Login = (props) => {
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

    props.onLogin({
      email: userData.email,
      password: userData.password,
      setUserData,
    });
  };

  return (
    <div className='auth'>
      <form name='login' id='login-form' className='auth__form'>
        <legend className='auth__legend'>Вход</legend>
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
        <button
          type='submit'
          onClick={handleSubmit}
          className='auth__submit'>
          Войти
        </button>
      </form>
    </div>
  );
};
