import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/authSelectors';
import {
  selectDiaryExercises,
  selectDiaryProducts,
} from '../redux/diary/diarySelectors';

const useStatistics = () => {
  const user = useSelector(selectUser);
  const products = useSelector(selectDiaryProducts);
  const execrcises = useSelector(selectDiaryExercises);

  const dailyCalorieIntake = user.profileSettings?.bmr ?? '0';
  const caloriesConsumed = products.reduce(
    (sum, product) => sum + product.calories,
    0
  );
  const caloriesRemaining = dailyCalorieIntake - caloriesConsumed;
  const dailyPhysicalActivity = 110;
  const caloriesBurned = execrcises.reduce(
    (sum, execrcise) => sum + execrcise.calories,
    0
  );
  const timeSport = execrcises.reduce(
    (sum, execrcise) => sum + execrcise.time,
    0
  );

  const sportsRemaining = Math.floor(timeSport / 60) - dailyPhysicalActivity;

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
