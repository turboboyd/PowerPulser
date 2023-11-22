import { useSelector } from "react-redux";
import { selectExercisesError, selectExercisesFilter, selectExercisesGetMore, selectExercisesIsLoading, selectExercisesItemsSelectFilter, selectExercisesTotalRecords } from "../redux/exercises/exercisesSelectors";

const useExercise = () => {
    const exercisesFilter = useSelector(selectExercisesFilter);
    const exercisesTotalRecords = useSelector(selectExercisesTotalRecords);
    const exercisesItemsSelectFilter = useSelector(selectExercisesItemsSelectFilter);
    const exercisesIsLoading = useSelector(selectExercisesIsLoading);
    const exercisesError = useSelector(selectExercisesError);
    const exercisesGetMore = useSelector(selectExercisesGetMore);
    
    return {
        exercisesFilter,
        exercisesTotalRecords,
        exercisesItemsSelectFilter,
        exercisesIsLoading,
        exercisesError,
        exercisesGetMore,
    };
};

export default useExercise;