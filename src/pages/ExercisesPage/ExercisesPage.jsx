import TitlePage from '../../components/TitlePage/TitlePage'
import ExercisesList from '../../components/ExercisesList/ExercisesList'
import ContainerBackground from '../../components/ContainerBackground/ContainerBackground'

import css from './../../components/ExercisesList/ExercisesList.module.css'
import Container from '../../components/Container/Container'

const ExercisesPage = () => {
  return (
    <ContainerBackground>
      <Container>
        <TitlePage title="" />
        <div className={css.cardContainerBackground}>
          <ExercisesList />
        </div>
      </Container>
    </ContainerBackground>
  );
}

export default ExercisesPage
