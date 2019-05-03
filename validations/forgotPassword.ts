import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Email nije validan!')
    .required('Email je obavezan!'),
});
