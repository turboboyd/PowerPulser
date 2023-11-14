import { useSelector } from "react-redux";
import { selectExercisesError, selectExercisesFilter, selectExercisesIsLoading, selectExercisesItemsSelectFilter } from "../redux/exercises/exercisesSelectors";

export const useExercise = () => {
    const exercisesFilter = useSelector(selectExercisesFilter);
    const exercisesItemsSelectFilter = useSelector(selectExercisesItemsSelectFilter);
    const exercisesIsLoading = useSelector(selectExercisesIsLoading);
    const exercisesError = useSelector(selectExercisesError);
    
    return {
        exercisesFilter,
        exercisesItemsSelectFilter,
        exercisesIsLoading,
        exercisesError,
    };
};