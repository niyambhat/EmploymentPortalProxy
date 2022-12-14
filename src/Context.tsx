import React, { createContext, useReducer } from 'react'
import { initialValues } from './initialValues'

const isText = RegExp(/^[A-Z ]+$/i)
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/) // us
const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/) // us
const isNumber = RegExp(/^\d+$/)

// Applied to all fields
const variant = 'standard'
const margin = 'normal'

export declare type ValidationSchema = Record<
  string,
  {
    value?: any
    error?: string
    required?: boolean
    validate?:
      | 'text'
      | 'number'
      | 'email'
      | 'phone'
      | 'zip'
      | 'checkbox'
      | 'select'
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>

type ContextProps = {
  activeStep: number
  formValues: ValidationSchema
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean
  ) => void
  handleRadio: any
  handleNext: () => void
  handleBack: () => void
  thresHoldChecker: (salary:number)=> void
  variant: 'outlined' | 'standard' | 'filled'
  margin: 'dense' | 'normal' | 'none'
}

export const AppContext = createContext<ContextProps>({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  handleRadio() {},
  thresHoldChecker() {},
  variant,
  margin
})

interface ProviderProps {
  children: React.ReactNode
}

type State = {
  activeStep: number
  formValues: ValidationSchema
}

type Action =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'form-value'; name: string; fieldValue: any }
  | { type: 'form-error'; name: string; error: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    case 'decrease':
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    case 'form-value':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue
          }
        }
      }
    case 'form-error':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error
          }
        }
      }

    default:
      return state
  }
}

export function StepsProvider({ children }: ProviderProps) {
  const [{ activeStep, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: initialValues
  })

  // Proceed to next step
  const handleNext = () => dispatch({ type: 'increase' })
  // Go back to prev step
  const handleBack = () => dispatch({ type: 'decrease' })
  //handle radioChange
  const handleRadio =(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{ 
    const { type, name, value } = event.target
    const fieldValue =  value;
    dispatch({ type: 'form-value', name, fieldValue });
    const fieldName = initialValues[name]
  }
  // Handle form change

  function thresHoldChecker(salary:number){
    const name = "taxIncomeBracket";
    let superContribution = salary * 0.105;
    setSuper(superContribution);
    if(salary > 0 && salary< 18201){
      const fieldValue = "0-$18,200"
      dispatch({ type: 'form-value', name, fieldValue });
      let calculatedvalue = 0;
      setTax(salary, calculatedvalue);
    }
     else if (salary > 18200 && salary< 37001){
      const fieldValue = "$18,201-$37,000";
      dispatch({ type: 'form-value', name, fieldValue }); 
      let calculatedvalue = (salary - 18200) * 0.19;
      setTax(salary, calculatedvalue);
  } else if (salary > 37000 && salary< 90001){
      const fieldValue = "$37,001-$90,000";
      dispatch({ type: 'form-value', name, fieldValue });
      let calculatedvalue = (salary - 37000) * 0.325 + 3572 ;
      setTax(salary, calculatedvalue);
  } else if (salary > 90000 && salary< 180001){
    const fieldValue = "$90,001-$180,200";
    dispatch({ type: 'form-value', name, fieldValue });
    let calculatedvalue = (salary - 90000 ) * 0.37+ 20797;
    setTax(salary, calculatedvalue);
  }  else if (salary > 180000){
    const fieldValue = "$180,001-over";
    dispatch({ type: 'form-value', name, fieldValue });
    let calculatedvalue = (salary - 180000 ) * 0.45+ 54097;
    setTax(salary, calculatedvalue);
  }
  }

  function setTax(salary:number, calculatedvalue:number){
    const  name= "taxableIncome";
    const fieldValue = calculatedvalue;
    dispatch({ type: 'form-value', name, fieldValue });
  }

  function setSuper(superContribution:number){
   const name="superContribution";
   const fieldValue = superContribution;
   dispatch({ type: 'form-value', name, fieldValue });
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean
  ) => {
    
    const { type, name, value } = event.target
    const fieldValue = type === 'checkbox' ? checked : value
    dispatch({ type: 'form-value', name, fieldValue })

    const fieldName = initialValues[name]
    if (!fieldName) return

    const { required, validate, minLength, maxLength, helperText } = fieldName

    let error = ''

    if (required && !fieldValue) error = 'This field is required'
    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`
    if (maxLength && value && value.length > maxLength)
      error = 'Maximum length exceeded!'
    if (validate) {
      switch (validate) {
        case 'text':
          if (value && !isText.test(value))
            error = helperText || 'This field accepts text only.'
          break

        case 'number':
          if (value && !isNumber.test(value))
            error = helperText || 'This field accepts numbers only.'
          break

        case 'email':
          if (value && !isEmail.test(value))
            error = helperText || 'Please enter a valid email address.'
          break

        case 'phone':
          if (value && !isPhone.test(value))
            error =
              helperText ||
              'Please enter a valid phone number. i.e: xxx-xxx-xxxx'
          break

        case 'zip':
          if (value && !isZip.test(value))
            error = helperText || 'Please enter a valid zip code.'
          break

        case 'checkbox':
          if (!checked) error = helperText || 'Please provide a valid value.'
          break

        case 'select':
          if (!value) error = helperText || 'Please select a value.'
          break

        default:
          break
      }
    }

    dispatch({ type: 'form-error', name, error })
  }

  return (
    <AppContext.Provider
      value={{
        activeStep,
        formValues,
        handleChange,
        handleNext,
        handleBack,
        handleRadio,
        thresHoldChecker,
        variant,
        margin
      }}
    >
      <div className="mui-step-form">{children}</div>
    </AppContext.Provider>
  )
}
