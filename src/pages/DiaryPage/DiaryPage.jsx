import css from "./DiaryPage.module.css";

import TitlePage from "../../components/TitlePage/TitlePage";

import DayDashboard from "../../components/DayDashboard/DayDashboard";
import DayExercises from "../../components/DayExercises/DayExercises";
import DayProducts from "../../components/DayProducts/DayProducts";
import DaySwitch from "../../components/DaySwitch/DaySwitch";

import { useDispatch } from "react-redux";
import { fetchAllDiary } from "../../redux/diary/diaryOperations";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatData";


const DiaryPage = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);

  
  useEffect(() => {
    const fetchDate = () => {
      if (selectedDate) {
        const date = {
          date: selectedDate,
        };
        dispatch(fetchAllDiary(date));
      }
    };
    fetchDate();
  }, [dispatch, selectedDate]);

  const handleDate = async (date) => {
    const formatedDate = formatDate(date);
    await setSelectedDate(formatedDate);
  };

  return (
    <div className={css.diaryPage}>
      <div className={css.calendarWrap}>
        <TitlePage title="Diary" />
        <div className={css.calendar}>
          <DaySwitch handleDate={handleDate} />
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
  );
};

export default DiaryPage;
