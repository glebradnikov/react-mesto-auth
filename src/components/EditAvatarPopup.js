import { useEffect } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export const EditAvatarPopup = (props) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (props.isOpen) {
      resetForm();
    }
  }, [props.isOpen, resetForm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: values.avatar,
    });
  };

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'edit-avatar'}
      submitText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className='popup__fieldset'>
        <label className='popup__label'>
          <input
            type='url'
            name='avatar'
            placeholder='Ссылка на картинку'
            className={`popup__input ${
              isValid.avatar === undefined || isValid.avatar
                ? ''
                : 'popup__input_type_error'
            }`}
            required
            value={values.avatar || ''}
            onChange={handleChange}
          />
          <span
            className={`popup__error ${
              isValid.avatar === undefined || isValid.avatar
                ? ''
                : 'popup__error_active'
            }`}>
            {errors.avatar}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};
