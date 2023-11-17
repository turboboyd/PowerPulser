import css from "./DiaryPage.module.css";

import TitlePage from "../../components/TitlePage/TitlePage";
import { Container, Section } from "../../components/Container";

import DayDashboard from "../../components/DayDashboard/DayDashboard";
import DayExercises from "../../components/DayExercises/DayExercises";
import DayProducts from "../../components/DayProducts/DayProducts";
import Calendar from "../../components/Calendar/Calendar";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllDiary } from "../../redux/diary/diaryOperations";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatData";
import { selectDiaryIsLoading } from "../../redux/diary/diarySelectors";

const DiaryPage = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(null);
  const isLoading = useSelector(selectDiaryIsLoading);

  useEffect(() => {
    const fetchDate = async () => {
      if (selectedDate) {
        const date = {
          date: selectedDate,
        };
        await dispatch(fetchAllDiary(date));
      }
    };

    fetchDate();
  }, [dispatch, selectedDate]);

  const handleDate = async (date) => {
    const formatedDate = formatDate(date);
    await setSelectedDate(formatedDate);
  };

  return (
    <Section>
      <Container>
          <>
            <div className={css.diaryPage}>
              <div className={css.calendarWrap}>
                <TitlePage title="Diary" />
                <div className={css.calendar}>
                  <Calendar handleDate={handleDate} />
                </div>
              </div>
        {isLoading && (
              <div className={css.sectionWrap}>
                <DayDashboard />
                <div>
                  <DayProducts />
                  <DayExercises />
                </div>
              </div>
            )}
            </div>
          </>
      </Container>
    </Section>
  );
};

export default DiaryPage;
