import { Popup } from './Popup';

export const PopupWithForm = (props) => {
  return (
    <Popup name={props.name} isOpen={props.isOpen} onClose={props.onClose}>
      <form
        name={props.name}
        className='popup__form'
        noValidate
        onSubmit={props.onSubmit}>
        <legend className='popup__legend'>{props.title}</legend>
        {props.children}
        <button type='submit' className='popup__submit'>
          {props.submitText}
        </button>
      </form>
    </Popup>
  );
};
