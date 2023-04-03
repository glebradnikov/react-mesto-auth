import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (props.isOpen) {
      setName('');
      setLink('');
    }
  }, [props.isOpen]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddPlace({
      title: name,
      link,
    });
  }

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-card'}
      submitText={'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className='popup__fieldset'>
        <label className='popup__field'>
          <input
            type='text'
            name='title'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            id='title-input-add-element'
            className='popup__input'
            required
            value={name}
            onChange={handleChangeName}
          />
          <span
            id='title-input-add-element-error'
            className='popup__error'></span>
        </label>
        <label className='popup__field'>
          <input
            type='url'
            name='link'
            placeholder='Ссылка на картинку'
            id='url-input-add-element'
            className='popup__input'
            required
            value={link}
            onChange={handleChangeLink}
          />
          <span
            id='url-input-add-element-error'
            className='popup__error'></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
