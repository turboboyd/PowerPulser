import css from "./DiaryPage.module.css";

import TitlePage from "../../components/TitlePage/TitlePage";
import { Container, Section } from "../../components/Container";

import DayDashboard from "../../components/DayDashboard/DayDashboard";
import DayExercises from "../../components/DayExercises/DayExercises";
import DayProducts from "../../components/DayProducts/DayProducts";
import Calendar from "../../components/Calendar/Calendar";

import { useDispatch } from "react-redux";
import { fetchAllDiary } from "../../redux/diary/diaryOperations";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatData";

const DiaryPage = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   dispatch(fetchAllDiary(date));
  // }, [dispatch]);

  const handleDate = (date) => {
    const formatedDate = formatDate(date);
    setDate(formatedDate);
  };

  return (
    <Section>
      <Container>
        <div className={css.diaryPage}>
          <div className={css.calendarWrap}>
            <TitlePage title="Diary" />
            <div className={css.calendar}>
              <Calendar handleDate={handleDate} />
            </div>
          </div>
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
