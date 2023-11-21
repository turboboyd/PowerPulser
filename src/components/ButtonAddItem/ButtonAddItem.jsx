import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './ButtonAddItem.module.css';

import Icon from '../ComponIcon/Icon';

const ButtonAddItem = ({ titleLink, titleRoute }) => {
  return (
    <>
      <Link className={css.addButtonLink} to={titleRoute}>
        {titleLink}
        <Icon className={css.addButtonImg} iconId={'Arrow'} />
      </Link>
    </>
  );
};

ButtonAddItem.propTypes = {
  titleLink: PropTypes.string.isRequired,
};

export default ButtonAddItem;
