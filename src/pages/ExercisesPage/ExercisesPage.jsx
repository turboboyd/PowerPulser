import TitlePage from "../../components/TitlePage/TitlePage";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import css from "./../../components/ExercisesList/ExercisesList.module.css";
import ExercisesSubcategoriesList from "../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList";
import { Container, Section } from '../../components/Container';

import React, { useState } from 'react';


const ExercisesPage = () => {
  const [selectedSubcategory] = useState(null);
  const [showTitlePage, setShowTitlePage] = useState(true);

  return (
    <Section>
      <Container>
        {showTitlePage && <TitlePage title="Exercises" />}
        <ExercisesSubcategoriesList
          setShowTitlePage={setShowTitlePage}
        />
        {selectedSubcategory && (
          <div className={css.cardContainerBackground}>
            <ExercisesList selectedSubcategory={selectedSubcategory} />
            
          </div>
        )}
      </Container>
    </Section>
  );
};


export default ExercisesPage;
