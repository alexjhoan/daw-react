import React, { Component } from 'react';
// Material ui
import TextField from '@material-ui/core/TextField';
import  Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme, DialogTitle, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Autocomplete from '@material-ui/lab/Autocomplete';


export const useFancyStyles = makeStyles((theme: Theme) =>
  createStyles({
    // input: {
    //   width: '50vw',
    //   margin: '20px'
    // },
    button: {
      borderRadius: '30px',
      width: 'max-content',
      padding: '0px 10px 0px 10px',
      margin: '50px 0px 50px 0px',

      '& > *': {
        margin: theme.spacing(1),
        width: 'max-content',

      },
    },
    buttonPrimary: {
        borderRadius: '30px',
        width: 'max-content',
        padding: '0px 10px 0px 10px',
        margin: '50px 0px 50px 0px',
        marginLeft: 'auto',
        '& > *': {
          margin: theme.spacing(1),
          width: 'max-content',

        },
      },
    buttonSecondary: {
      borderRadius: '30px',
      width: 'max-content',
      padding: '0px 10px 0px 10px',
      margin: '50px 0px 50px 0px',

      '& > *': {
        margin: theme.spacing(1),
        width: 'max-content',

        },
    },
    paper: {
      width: '300px',
    }

  }),
);

export const FancyTextInput = (props: any) => (
  <div>
    <TextField variant="outlined" fullWidth={true} margin={"dense"} {...props}/>
  </div>
);

export const FancyButton =(props:any) => (
  <Button {...props}/>
);

export const FancyModal = (props:any) => (
  <div>
  <Dialog open={props.open} onClose={props.onClose} {...props} >

      {props.children}

  </Dialog>
 </div>
);

export const FancyAutocomplete = (props: any) => {
  return (
      <Autocomplete
          {...props}
          value={props.selection}
          id="combo-box-demo"
          options={props.select}
          getOptionSelected={(option: any, value: any) => option === value}
          // getOptionLabel={(option: any) => getOpObj(option, props.select).status}
          getOptionLabel={props.LabelOption}
          renderInput={(params: any) => <FancyTextInput {...params} label={props.label}
          />}
          // onChange={(event: any, newValue: any | null) => {
          //     setValue(newValue.id);
          // }}
          onChange={props.change}
      />
  )
}

