import css from "./DiaryPage.module.css";

import TitlePage from "../../components/TitlePage/TitlePage";
import ParentComponent from "../../components/Calendar/Calendar";
import { Container, Section } from "../../components/Container";

const DiaryPage = () => {
  return (
    <Section>
      <Container>
        <div className={css.diaryPage}>
          <TitlePage title="Diary" />
          <ParentComponent />
          <div className={css.sectionWrap}>
            <div></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default DiaryPage;
