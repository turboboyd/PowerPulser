import React from "react";


function Icon({ className, sprite, iconId }) {
  return (
      <svg className={className} preserveAspectRatio="none">
        <use href={`${sprite}#${iconId}`}/>
      </svg>
  );
}

export default Icon;
