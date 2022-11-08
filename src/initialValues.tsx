import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
    firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: '',
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
    value: '',
    error: '',
    validate: 'select'
  },
  nation: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  email: {
    value: '',
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
    value: '',
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
    value: '',
    error: '',
    validate: 'number',
    maxLength: 15
  },
  bsb: {
    value: '',
    error: '',
    validate: 'number',
    maxLength: 6
  }, account: {
    value: '',
    error: '',
    validate: 'number',
    maxLength: 6
  },
  superProvider:{
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  superNumber:{
    value: '',
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
  }
}
