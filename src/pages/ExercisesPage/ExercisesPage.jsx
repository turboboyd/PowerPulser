import TitlePage from '../../components/TitlePage/TitlePage'
import ExercisesList from '../../components/ExercisesList/ExercisesList'
import ContainerBackground from '../../components/ContainerBackground/ContainerBackground'

import css from './../../components/ExercisesList/ExercisesList.module.css'

const ExercisesPage = () => {
  return (
    <>
      <TitlePage title="" />
      <div className={css.cardContainerBackground}>
        <ExercisesList />
        <ContainerBackground />
      </div>
    </>
  )
}

export default ExercisesPage
