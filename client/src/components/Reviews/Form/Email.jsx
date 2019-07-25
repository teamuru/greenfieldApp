import React from 'react';

import { TextField, Box, Typography, Paper } from '@material-ui/core/';

import { useStyles } from './styles.js';

const Email = ({ email, handleChange, error }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <Typography className={error ? classes.titleError : classes.title}>
        enter a email*
      </Typography>
      <TextField
        className={classes.txt}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="enter email"
        required
        name="email"
        value={email}
        error={error}
      />
    </Paper>
  );
};

export default Email;
