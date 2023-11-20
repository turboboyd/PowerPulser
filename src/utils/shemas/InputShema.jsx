import * as Yup from 'yup';

const InputShema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  grams: Yup.number().required('Required field').positive().integer(),
});

export default InputShema;
