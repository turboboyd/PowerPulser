import { useSelector } from "react-redux";
import { selectDiaryError, selectDiaryExercises, selectDiaryIsLoading, selectDiaryProducts } from "../redux/diary/diarySelectors";

const useDiary = () => {
    const diaryProducts = useSelector(selectDiaryProducts);
    const diaryExercises = useSelector(selectDiaryExercises);
    const diaryIsLoading = useSelector(selectDiaryIsLoading);
    const diaryError = useSelector(selectDiaryError);
    
    return {
        diaryProducts,
        diaryExercises,
        diaryIsLoading,
        diaryError,
    };
};

export default useDiary;