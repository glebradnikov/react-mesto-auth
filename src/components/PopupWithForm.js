function PopupWithForm(props) {
  return (
    <div
      id={`popup-${props.name}`}
      className={`popup ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className='popup__form-container'>
        <button
          type='button'
          aria-label='Закрыть'
          className='popup__close'
          onClick={props.onClose}></button>
        <form
          name={props.name}
          id='form-confirm'
          className='popup__form'
          onSubmit={props.onSubmit}>
          <legend className='popup__legend'>{props.title}</legend>
          {props.children}
          <button type='submit' className='popup__submit'>
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
