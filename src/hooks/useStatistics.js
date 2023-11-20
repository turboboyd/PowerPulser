import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import {
  selectDiaryExercises,
  selectDiaryProducts,
} from "../redux/diary/diarySelectors";

const useStatistics = () => {
  const user = useSelector(selectUser);
  const products = useSelector(selectDiaryProducts);
  const execrcises = useSelector(selectDiaryExercises);

  const dailyCalorieIntake = user.profileSettings?.bmr ?? "0";
  const caloriesConsumed = products.reduce(
    (sum, product) => sum + product.calories,
    0
  );
  const caloriesRemaining = dailyCalorieIntake - caloriesConsumed;
  const dailyPhysicalActivity = 110;
  const caloriesBurned = 850; //неправильно треба пігрузити вправи!!!!!!!!!!
  const sportsRemaining = 180 - dailyPhysicalActivity; //неправильно треба пігрузити вправи!!!!!!!!!!

  return {
    dailyCalorieIntake,
    caloriesConsumed,
    caloriesRemaining,
    dailyPhysicalActivity,
    caloriesBurned,
    sportsRemaining,
  };
};

export default useStatistics;
