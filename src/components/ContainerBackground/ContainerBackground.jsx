import css from './ContainerBackground.module.css'

const ContainerBackground = ({ children }) => {
  return <div className={css.backgroundContainer}>{children}</div>
}

export default ContainerBackground
