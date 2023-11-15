import React from 'react';

import css from './Button.module.css';

const Button = ({ text, className }) => {
  const buttonClass = `${css.button} ${className || ''}`;

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
