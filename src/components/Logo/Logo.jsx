import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './Logo.module.css';
import Icon from '../ComponIcon/Icon';
import useAuth from '../../hooks/useAuth';
import getLogoLink from '../../utils/getLogoLink';

const Logo = ({ isNotFoundPage }) => {
  const { isVerify, user } = useAuth();
  const link = getLogoLink(isVerify, user);
  return (
    <Link className={`${css.logo_wrap}`} to={link}>
      <motion.div
        className="heartbeat-element"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Icon
          className={
            !isNotFoundPage ? `${css.logo} ` : `${css.logo} ${css.logo_white}`
          }
          iconId="Weight"
        />
      </motion.div>
      <div>
        <Icon className={css.logo_name} iconId="PowerPulse" />
      </div>
    </Link>
  );
};

export default Logo;
