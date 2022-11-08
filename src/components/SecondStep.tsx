import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../Context'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  visibility: 'hidden',
  position:"absolute"
});

export default function SecondStep() {
  const {
    formValues,
    handleChange,
    handleRadio,
    handleBack,
    handleNext,
    thresHoldChecker,
    variant,
    margin
  } = useContext(AppContext)
  const { tfn, agreenemt, bsb, account,salary, superProvider, superNumber, taxIncomeBracket } = formValues
 
  const isError = useCallback(
    () =>
      Object.keys({ tfn, bsb, account, superProvider,salary, superNumber,agreenemt }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, tfn, bsb, account, superProvider, salary, agreenemt, superNumber]
  )


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Enter your Salary"
            name="salary"
            placeholder="TFN"
            value={salary.value}
            onBlur={()=>thresHoldChecker(salary.value)}
            onChange={handleChange}
            error={!!salary.error}
            helperText={salary.error}
            required={salary.required}
          />
        </Grid>
   
        <Grid item xs={12}>
        <div id="radio">
            {
              taxThresHolds.map((item,i)=>{
              return(
                  <>
                  <MyComponent className="radioWrap">
                  <label htmlFor={item.bracket}>{item.bracket}</label>
                  <input type="radio" name="taxIncomeBracket" value={item.bracket} checked={taxIncomeBracket.value == item.bracket} onChange={handleRadio}/>
                  </MyComponent>
                  </>      
              )   
              })
          }
        </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="TFN"
            name="tfn"
            placeholder="TFN"
            value={tfn.value}
            onChange={handleChange}
            error={!!tfn.error}
            helperText={tfn.error}
            required={tfn.required}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="BSB"
            name="bsb"
            placeholder="BSB"
            value={bsb.value}
            onChange={handleChange}
            error={!!bsb.error}
            helperText={bsb.error}
            required={bsb.required}
          />
        </Grid>


        <Grid item xs={8}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Account No."
            name="account"
            placeholder="Account"
            value={account.value}
            onChange={handleChange}
            error={!!account.error}
            helperText={account.error}
            required={account.required}
          />
        </Grid>

        
        <Grid item xs={8}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Your nominated super fund"
            name="superProvider"
            placeholder="Your nominated super fund"
            value={superProvider.value}
            onChange={handleChange}
            error={!!superProvider.error}
            required={superProvider.required}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Membership No."
            name="superNumber"
            placeholder="Membership No."
            value={superNumber.value}
            onChange={handleChange}
            error={!!superNumber.error}
            required={superNumber.required}
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt.value}
                onChange={handleChange}
                name="agreenemt"
                color="primary"
                required={agreenemt.required}
              />
            }
            label="Agree to terms and conditions"
          />
          <FormHelperText error={!!agreenemt.error}>
            {agreenemt.error}
          </FormHelperText>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
const taxThresHolds = 
[{
    id:1, bracket: "0-$18,200", taxOnthisIncome:"Nil" 
},
{
    id:2, bracket: "$18,201-$37,000", taxOnthisIncome:"19c for each $1 over $18200" 
},
{
    id:3, bracket: "$37,001-$90,000", taxOnthisIncome:"$3572 plus 32.5 for eacg $1 over $37000" 
},
{
    id:4, bracket: "$90,001-$180,200", taxOnthisIncome:"$20,797 plus 37c for each $1 over $90,000" 
},
{
    id:5, bracket: "$180,001-over", taxOnthisIncome:"$54,097 plus 45c for each $1 over 180000" 
}]

