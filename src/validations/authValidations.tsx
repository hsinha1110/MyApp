import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must not exceed 100 characters'),

  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must not exceed 20 characters'),
});

export const registerSchema = yup.object({
  firstName: yup.string().required('First name is required'),

  lastName: yup.string().required('Last name is required'),

  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),

  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits'),

  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export default {
  loginSchema,
  registerSchema,
};
