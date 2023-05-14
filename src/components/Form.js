export const Form = (props) => {
  return (
    <form
      name={props.name}
      className='popup__form'
      noValidate
      onSubmit={props.onSubmit}>
      <legend className='popup__legend'>{props.title}</legend>
      {props.children}
      <button
        type='submit'
        className={`popup__submit ${
          props.isValid ? '' : 'popup__submit_disabled'
        }`}
        disabled={props.isValid}>
        {props.submitText}
      </button>
    </form>
  );
};
