import * as yup from 'yup';

export const addressSchema = yup.object({
  label: yup.string().oneOf(['home', 'office', 'other']).default('home'),

  fullName: yup.string().trim().required('Full name is required'),

  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]{10}$/, 'Enter valid phone number')
    .required('Phone number is required'),

  line1: yup.string().trim().required('Address Line 1 is required'),

  line2: yup.string().trim().required('Address Line 2 is required'),

  city: yup.string().trim().required('City is required'),

  state: yup.string().trim().required('State is required'),

  postalCode: yup
    .string()
    .trim()
    .matches(/^[0-9]{6}$/, 'Enter valid postal code')
    .required('Postal code is required'),

  country: yup.string().trim().required('Country is required'),
});
