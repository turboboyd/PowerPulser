import { object, number } from 'yup';

const InputSchema = object({
  grams: number().positive().required('Grams are required'),
});

export default InputSchema;
