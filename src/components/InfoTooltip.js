import { Popup } from './Popup';
import popupSuccessIcon from '../images/popup-success-icon.svg';
import popupFailIcon from '../images/popup-fail-icon.svg';

export const InfoTooltip = (props) => {
  return (
    <Popup name='info-tooltip' isOpen={props.isOpen} onClose={props.onClose}>
      <figure className='popup__figure'>
        <img
          src={props.isRegister ? popupSuccessIcon : popupFailIcon}
          alt={
            props.isRegister
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте ещё раз.'
          }
          className='popup__image popup__image_type_register'
        />
        <figcaption className='popup__caption popup__caption_type_register'>
          {props.isRegister
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </figcaption>
      </figure>
    </Popup>
  );
};
