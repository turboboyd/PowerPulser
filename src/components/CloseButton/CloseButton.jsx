import css from './CloseButton.module.css';
import Icon from '../ComponIcon/Icon';

const CloseButton = ({ handleCloseModal }) => {
  return (
    <button className={css.button} type="button" onClick={handleCloseModal}>
      <Icon className={css.iconClose} iconId="Close" />
    </button>
  );
};

export default CloseButton;
