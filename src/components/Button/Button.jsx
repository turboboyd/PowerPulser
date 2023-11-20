import React from "react";

import css from "./Button.module.css";

const Button = ({ text, className, disabled }) => {
  const buttonClass = `${css.button} ${className || ""}`;

  return (
    <button className={buttonClass} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
