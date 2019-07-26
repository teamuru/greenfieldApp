import React from 'react';

import { TextField, Box, Typography, Paper } from '@material-ui/core/';

import { useStyles } from './styles.js';

const Username = ({ name, handleChange, error }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <Typography className={error ? classes.titleError : classes.title}>
        nickname*
      </Typography>
      <TextField
        className={classes.txt}
        required={true}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="enter nickname"
        required={true}
        value={name}
        name="name"
        error={error}
      />
    </Paper>
  );
};

export default Username;
