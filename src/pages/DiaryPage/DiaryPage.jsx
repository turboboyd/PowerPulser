import css from "./DiaryPage.module.css";

import DayExercises from "../../components/DayExercises/DayExercises";
import DayProducts from "../../components/DayProducts/DayProducts";
import DayDashbroad from "../../components/DayDashboard/DayDashboard";
import TitlePage from "../../components/TitlePage/TitlePage";
import ParentComponent from "../../components/Calendar/Calendar";

const DiaryPage = () => {
  return (
    <div className={css.diaryPage}>
      <TitlePage title="Diary" />
      <ParentComponent />
      <div className={css.sectionWrap}>
        <DayDashbroad />
        <div>
          <DayProducts />
          <DayExercises />
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
