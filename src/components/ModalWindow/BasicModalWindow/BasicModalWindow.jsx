import css from './BasicModalWindow.module.css';
import { createPortal } from 'react-dom';
import Icon from '../../ComponIcon/Icon';

const modalRoot = document.querySelector('#modal-root');

const BasicModalWindow = ({ children, handleModalToggle }) => {
  return createPortal(
    <div className={css.backdrop}>
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
