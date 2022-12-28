import React,{ useEffect, useState } from 'react'
import {FormControl, InputLabel, MenuItem, Select, FormHelperText} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const MinPriceFilter: React.FC<{
  minPrice: string
  setMinPrice
}> = ({ minPrice,setMinPrice}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
   );
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinPrice(event.target.value as string);
  }

 return (
    <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Min Price</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={minPrice}
          onChange={(handleChange)}
        >
          {[0,1,2].map((val, index) => (
            <MenuItem key={index} value={val}>{val}</MenuItem>
          ))}

        </Select>
        <FormHelperText>Required</FormHelperText>
    </FormControl>
 )

}
