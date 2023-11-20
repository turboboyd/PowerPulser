import css from './CloseButton.module.css';
import Icon from '../ComponIcon/Icon';
import PropTypes from 'prop-types';

const CloseButton = ({ handleCloseModal }) => {
  return (
    <button className={css.button} type="button" onClick={handleCloseModal}>
      <Icon className={css.iconClose} iconId="Close" />
    </button>
  );
};

CloseButton.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default CloseButton;
