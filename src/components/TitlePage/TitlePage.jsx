import css from "./TitlePage.module.css"

export default function TitlePage({ title }) {
  return <h1 className={css.title}>{title}</h1>;
}


