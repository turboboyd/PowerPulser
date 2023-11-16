import { useDispatch } from "react-redux";

import css from "./DiaryPage.module.css";

import TitlePage from "../../components/TitlePage/TitlePage";
import { Container, Section } from "../../components/Container";

import DayDashboard from "../../components/DayDashboard/DayDashboard";
import DayExercises from "../../components/DayExercises/DayExercises";
import DayProducts from "../../components/DayProducts/DayProducts";

const DiaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDiary);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div className={css.diaryPage}>
          <TitlePage title="Diary" />
          <div className={css.sectionWrap}>
            <DayDashboard />
            <div>
              <DayProducts />
              <DayExercises />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};


export default DiaryPage;
