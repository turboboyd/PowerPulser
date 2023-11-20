import { addExercisesDiary, addProductDiary, deleteExercisesDiary, deleteProductDiary, fetchAllDiary } from "./diaryOperations";

const operationsThunk = [fetchAllDiary, addProductDiary, deleteProductDiary, addExercisesDiary, deleteExercisesDiary];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);