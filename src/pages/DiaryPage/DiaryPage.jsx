import css from "./DiaryPage.module.css";


import TitlePage from "../../components/TitlePage/TitlePage";
import ParentComponent from "../../components/Calendar/Calendar";

const DiaryPage = () => {
  return (
    <div className={css.diaryPage}>
      <TitlePage title="Diary" />
      
      <div className={css.sectionWrap}>
        <ParentComponent />
      </div>
    </div>
  );
};

export default DiaryPage;
