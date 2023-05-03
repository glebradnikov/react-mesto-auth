import { Popup } from './Popup';

export const ImagePopup = (props) => {
  return (
    <Popup name='image' isOpen={props.isOpen} onClose={props.onClose}>
      <figure className='popup__figure'>
        <img
          src={props.card.link}
          alt={props.card.name}
          className='popup__image'
        />
        <figcaption className='popup__caption'>{props.card.name}</figcaption>
      </figure>
    </Popup>
  );
};
