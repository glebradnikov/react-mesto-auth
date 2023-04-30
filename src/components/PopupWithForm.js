export const PopupWithForm = (props) => {
  return (
    <div className={`popup ${props.isOpen && 'popup_is-opened'}`}>
      <div className='popup__container'>
        <button
          type='button'
          aria-label='Закрыть'
          className='popup__close'
          onClick={props.onClose}></button>
        <form
          name={props.name}
          id={`form-${props.name}`}
          className='popup__form'
          noValidate
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
};
