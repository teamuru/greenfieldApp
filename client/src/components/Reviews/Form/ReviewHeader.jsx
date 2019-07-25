import React from 'react';

import { TextField, Box, Typography, Paper } from '@material-ui/core/';

import { useStyles } from './styles.js';

const RevSummary = ({ summary = '', handleChange, error }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <Typography className={error ? classes.titleError : classes.title}>
        Review Summary*
      </Typography>
      <TextField
        className={classes.txt}
        required={true}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="i.e. What an amazing onesie!"
        required={true}
        value={summary}
        name="summary"
        error={error}
      />
    </Paper>
  );
};

export default RevSummary;
