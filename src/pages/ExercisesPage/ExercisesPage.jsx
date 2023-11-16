import TitlePage from '../../components/TitlePage/TitlePage'
import ExercisesList from '../../components/ExercisesList/ExercisesList'
import WaistBackgroundImage from '../../components/BackgroundImage/Waist/WaistBackgroundImage'

import css from './../../components/ExercisesList/ExercisesList.module.css'
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList'
import { Container, Section } from '../../components/Container'

const ExercisesPage = () => {
  return (
    <Section>
      <Container>
        <TitlePage title="Exercises" />
        <ExercisesSubcategoriesList />
        <div className={css.cardContainerBackground}>
          <ExercisesList />
        </div>
        <WaistBackgroundImage />
      </Container>
    </Section>
  );
}

export default ExercisesPage
