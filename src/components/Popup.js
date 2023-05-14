import { useEffect } from 'react';

export const Popup = (props) => {
  useEffect(() => {
    if (!props.isOpen) return;

    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        props.onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [props]);

  const handleOverlay = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div
      className={`popup ${props.isOpen ? 'popup_opened' : ''} popup_type_${
        props.name
      }`}
      onMouseDown={handleOverlay}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button
          type='button'
          aria-label='Закрыть'
          className='popup__close'
          onClick={props.onClose}></button>
        {props.children}
      </div>
    </div>
  );
};
