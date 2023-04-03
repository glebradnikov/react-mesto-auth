import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (props.isOpen) {
      setAvatar('');
    }
  }, [props.isOpen]);

  function handleChangeAvatar(event) {
    setAvatar(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar,
    });
  }

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'edit-avatar'}
      submitText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className='popup__fieldset'>
        <label className='popup__field'>
          <input
            type='url'
            name='avatar'
            placeholder='Ссылка на картинку'
            id='url-input-avatar'
            className='popup__input'
            required
            value={avatar}
            onChange={handleChangeAvatar}
          />
          <span id='url-input-avatar-error' className='popup__error'></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
