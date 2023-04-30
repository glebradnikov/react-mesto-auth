import { useState, useEffect } from 'react';
import { PopupWithForm } from './PopupWithForm';

export const EditAvatarPopup = (props) => {
  const [avatar, setAvatar] = useState('');
  const [errors, setErrors] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (props.isOpen) {
      setAvatar('');
      setErrors('');
      setIsValid(true);
    }
  }, [props.isOpen]);

  const handleChangeAvatar = (event) => {
    setAvatar(event.target.value);
    setErrors(event.target.validationMessage);
    setIsValid(event.target.closest('form').checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar,
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
              isValid ? '' : 'popup__input_type_error'
            }`}
            required
            value={avatar}
            onChange={handleChangeAvatar}
          />
          <span
            className={`popup__error ${isValid ? '' : 'popup__error_active'}`}>
            {errors}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};
