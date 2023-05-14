import { Popup } from './Popup';
import { Form } from './Form';

export const PopupWithForm = (props) => {
  return (
    <Popup name={props.name} isOpen={props.isOpen} onClose={props.onClose}>
      <Form
        name={props.name}
        title={props.title}
        submitText={props.submitText}
        isValid={props.isValid}
        onSubmit={props.onSubmit}>
        {props.children}
      </Form>
    </Popup>
  );
};
