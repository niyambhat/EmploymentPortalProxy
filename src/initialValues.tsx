import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
    firstName: {
    value: 'John',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: 'Legend',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  date: {
    value: '',
    error: ''
  },
  gender: {
    value: 'Male',
    error: '',
    validate: 'select'
  },
  nation: {
    value: 'Australian',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  city: {
    value: 'Perth',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  email: {
    value: 'local@local.com',
    error: '',
    validate: 'email'
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '123123123',
    error: '',
    validate: 'phone',
    maxLength: 15
  },
  zip: {
    value: '',
    error: '',
    validate: 'zip',
    maxLength: 15
  },
  tfn: {
    value: '3214321',
    error: '',
    validate: 'number',
    maxLength: 15
  },
  bsb: {
    value: '432156',
    error: '',
    validate: 'number',
    maxLength: 6
  }, account: {
    value: '1234567',
    error: '',
    validate: 'number',
    maxLength: 6
  },
  superProvider:{
    value: 'Rest Super',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  superNumber:{
    value: '123456',
    error: '',
    required: true,
    validate: 'number',
    maxLength: 6
  },  salary: {
    value: '',
    error: '',
    validate: 'number',
    maxLength: 15
  }, 
  taxIncomeBracket:{
    value: "",
    error: "",
    maxLength: 20
  },
  taxableIncome:{
    value:"",
    maxLength:20
  },
  superContribution:{
    value:"",
    maxLength:20,
    validate: 'number',
  }
}
