import { useContext, useState, useEffect } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

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
            id='name-input-edit-profile'
            className='popup__input'
            required
            value={name}
            onChange={handleChangeName}
          />
          <span
            id='name-input-edit-profile-error'
            className='popup__error'></span>
        </label>
        <label className='popup__label'>
          <input
            type='text'
            name='about'
            placeholder='Место работы'
            minLength='2'
            maxLength='200'
            id='workplace-input-edit-profile'
            className='popup__input'
            required
            value={description}
            onChange={handleChangeDescription}
          />
          <span
            id='workplace-input-edit-profile-error'
            className='popup__error'></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};
