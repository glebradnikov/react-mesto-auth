import { useEffect, useContext } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, setValues, handleChange, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (props.isOpen) {
      resetForm();

      setValues({
        name: currentUser.name,
        about: currentUser.about,
      });
    }
  }, [props.isOpen, currentUser, setValues, resetForm]);

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
              isValid.name === undefined || isValid.name
                ? ''
                : 'popup__input_type_error'
            }`}
            required
            value={values.name || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.name === undefined || isValid.name
                ? ''
                : 'popup__error_active'
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
              isValid.about === undefined || isValid.about
                ? ''
                : 'popup__input_type_error'
            }`}
            required
            value={values.about || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.about === undefined || isValid.about
                ? ''
                : 'popup__error_active'
            }`}>
            {errors.about}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};
