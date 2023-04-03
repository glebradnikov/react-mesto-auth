function ImagePopup(props) {
  return (
    <div
      id='popup-image'
      className={`popup popup_type_image ${
        props.isOpen ? 'popup_is-opened' : ''
      }`}>
      <div className='popup__image-container'>
        <button
          type='button'
          aria-label='Закрыть'
          className='popup__close'
          onClick={props.onClose}></button>
        <figure className='popup__figure'>
          <img
            src={props.card.link}
            alt={props.card.name}
            className='popup__image'
          />
          <figcaption className='popup__caption'>{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
