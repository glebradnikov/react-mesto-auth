import { useContext, useState, useEffect } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  useEffect(() => {
    if (props.isOpen) {
      setValues({
        name: currentUser.name,
        about: currentUser.about,
      });
      setErrors({});
      setIsValid({
        name: true,
        about: true,
      });
    }
  }, [currentUser, props.isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
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

    props.onUpdateUser({
      name: values.name,
      about: values.about,
    });
  };

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'edit-profile'}
      submitText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className='popup__fieldset'>
        <label className='popup__label'>
          <input
            type='text'
            name='name'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            className={`popup__input ${
              isValid.name ? '' : 'popup__input_type_error'
            }`}
            required
            value={values.name || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.name ? '' : 'popup__error_active'
            }`}>
            {errors.name}
          </span>
        </label>
        <label className='popup__label'>
          <input
            type='text'
            name='about'
            placeholder='Место работы'
            minLength='2'
            maxLength='200'
            className={`popup__input ${
              isValid.about ? '' : 'popup__input_type_error'
            }`}
            required
            value={values.about || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.about ? '' : 'popup__error_active'
            }`}>
            {errors.about}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};
