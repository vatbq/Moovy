import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'rgb(245 238 238 / 20%) !important',
  },

  labelFocused: {
    color: 'rgb(245 238 238 / 70%) !important',
  },

  input: {
    color: 'rgb(245 238 238 / 70%) !important',
    marginBottom: '50px',
  },
}));

const InputUser = ({ label, onChange, value, textFieldProps }) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      InputLabelProps={{
        classes: {
          root: classes.labelFocused,
          focused: classes.labelFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.input,
          notchedOutline: classes.notchedOutline,
        },
      }}
      {...textFieldProps}
    />
  );
};

export default InputUser;
