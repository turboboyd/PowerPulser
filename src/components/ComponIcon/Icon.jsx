import sprite from "../../images/svg/InlineSprite.svg";

function Icon({ className, iconId }) {
  return (
      <svg className={className} preserveAspectRatio="none">
        <use href={`${sprite}#${iconId}`}/>
      </svg>
  );
}

export default Icon;
