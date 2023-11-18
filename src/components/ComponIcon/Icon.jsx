import sprite from "../../images/svg/InlineSprite.svg";

function Icon({ className, iconId, onClick }) {
  return (
    <svg className={className} preserveAspectRatio="none" onClick={onClick}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
}

export default Icon;
