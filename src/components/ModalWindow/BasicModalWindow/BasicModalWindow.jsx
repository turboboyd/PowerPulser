import css from './BasicModalWindow.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import Icon from '../../ComponIcon/Icon';

const modalRoot = document.querySelector('#modal-root');

const BasicModalWindow = ({ children, handleModalToggle }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        handleModalToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleModalToggle]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modalWrapper}>
        <button
          className={css.button}
          type="button"
          onClick={handleModalToggle}
        >
          <Icon className={css.iconClose} iconId="Close" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default BasicModalWindow;
