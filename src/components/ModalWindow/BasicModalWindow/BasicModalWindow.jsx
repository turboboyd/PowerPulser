import css from './BasicModalWindow.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import CloseButton from '../../CloseButton/CloseButton';

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
        <CloseButton handleCloseModal={handleModalToggle} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

BasicModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
};

export default BasicModalWindow;
