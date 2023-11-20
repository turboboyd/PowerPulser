import { useSelector } from "react-redux";
import { selectExercisesError, selectExercisesFilter, selectExercisesGetMore, selectExercisesIsLoading, selectExercisesItemsSelectFilter } from "../redux/exercises/exercisesSelectors";

const useExercise = () => {
    const exercisesFilter = useSelector(selectExercisesFilter);
    const exercisesItemsSelectFilter = useSelector(selectExercisesItemsSelectFilter);
    const exercisesIsLoading = useSelector(selectExercisesIsLoading);
    const exercisesError = useSelector(selectExercisesError);
    const exercisesGetMore = useSelector(selectExercisesGetMore);
    
    return {
        exercisesFilter,
        exercisesItemsSelectFilter,
        exercisesIsLoading,
        exercisesError,
        exercisesGetMore,
    };
};

export default useExercise;