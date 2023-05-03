import { useEffect } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export const AddPlacePopup = (props) => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (props.isOpen) {
      resetForm();
    }
  }, [props.isOpen, resetForm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onAddPlace({
      title: values.title,
      link: values.link,
    });
  };

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-card'}
      submitText={'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className='popup__fieldset'>
        <label className='popup__label'>
          <input
            type='text'
            name='title'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            className={`popup__input ${
              isValid.title === undefined || isValid.title
                ? ''
                : 'popup__input_type_error'
            }`}
            required
            value={values.title || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.title === undefined || isValid.title
                ? ''
                : 'popup__error_active'
            }`}>
            {errors.title}
          </span>
        </label>
        <label className='popup__label'>
          <input
            type='url'
            name='link'
            placeholder='Ссылка на картинку'
            className={`popup__input ${
              isValid.link === undefined || isValid.link
                ? ''
                : 'popup__input_type_error'
            }`}
            required
            value={values.link || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.link === undefined || isValid.link
                ? ''
                : 'popup__error_active'
            }`}>
            {errors.link}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};
