import { AuthForm } from './AuthForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export const Register = (props) => {
  const { values, errors, isValid, handleChange } = useFormAndValidation();

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onRegister({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <AuthForm
      name={'register'}
      legendText={'Регистрация'}
      submitText={'Зарегистрироваться'}
      onSubmit={handleSubmit}>
      <fieldset className='auth__fieldset'>
        <label className='auth__label'>
          <input
            type='email'
            name='email'
            value={values.email || ''}
            placeholder='Email'
            className={`auth__input ${
              isValid.email === undefined || isValid.email
                ? ''
                : 'auth__input_type_error'
            }`}
            required
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.email === undefined || isValid.email
                ? ''
                : 'popup__error_active'
            }`}>
            {errors.email}
          </span>
        </label>
        <label className='auth__label'>
          <input
            type='password'
            name='password'
            value={values.password || ''}
            placeholder='Пароль'
            minLength='8'
            maxLength='128'
            className={`auth__input ${
              isValid.password === undefined || isValid.password
                ? ''
                : 'auth__input_type_error'
            }`}
            required
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.password === undefined || isValid.password
                ? ''
                : 'popup__error_active'
            }`}>
            {errors.password}
          </span>
        </label>
      </fieldset>
    </AuthForm>
  );
};
