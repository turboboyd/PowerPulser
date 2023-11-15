import css from './Section.module.css'


const Section = ({ children, className}) => {
  const style = `${css.section} ${className}`;
  return <section className={style}>{children}</section>;
};

export default Section;