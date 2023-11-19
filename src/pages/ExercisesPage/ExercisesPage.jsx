<<<<<<< Updated upstream
import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";

import css from "./../../components/ExercisesList/ExercisesList.module.css";
import ExercisesSubcategoriesList from "../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList";

=======
import React, { useState } from 'react';
import TitlePage from '../../components/TitlePage/TitlePage';
import ExercisesList from '../../components/ExercisesList/ExercisesList';
import WaistBackgroundImage from '../../components/BackgroundImage/Waist/WaistBackgroundImage';
import css from './../../components/ExercisesList/ExercisesList.module.css'
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { Container, Section } from '../../components/Container';
>>>>>>> Stashed changes

const ExercisesPage = () => {
  const [selectedSubcategory] = useState(null);
  const [showTitlePage, setShowTitlePage] = useState(true);

  return (
<<<<<<< Updated upstream
    <>
      <TitlePage title="Exercises" />
      <ExercisesSubcategoriesList />
      <div className={css.cardContainerBackground}>
        <ExercisesList />
      </div>
    </>
  );
};

=======
    <Section>
      <Container>
        {showTitlePage && <TitlePage title="Exercises" />}
        <ExercisesSubcategoriesList
          setShowTitlePage={setShowTitlePage}
        />
        {selectedSubcategory && (
          <div className={css.cardContainerBackground}>
            <ExercisesList selectedSubcategory={selectedSubcategory} />
            <WaistBackgroundImage />
          </div>
        )}
      </Container>
    </Section>
  );
};
>>>>>>> Stashed changes
export default ExercisesPage;
