import { fetchExercisesFilter, fetchExercisesItemsSelectedFilter } from "./exercisesOperations";

const operationsThunk = [fetchExercisesFilter, fetchExercisesItemsSelectedFilter];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);