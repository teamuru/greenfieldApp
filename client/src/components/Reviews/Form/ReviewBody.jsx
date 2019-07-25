import React from 'react';

import { TextField, Typography, Paper, Grid } from '@material-ui/core/';

import { useStyles } from './styles.js';

const ReviewBody = ({ body, handleChange, error }) => {
  const classes = useStyles();
  const minReqChars = () => {
    let remainingChars = 50 - body.length;
    return remainingChars > 0
      ? `The response needs ${remainingChars} more characters`
      : 'Able to submit';
  };

  return (
    <Paper className={classes.header}>
      <Typography className={error ? classes.titleError : classes.title}>
        Review*
      </Typography>
      <TextField
        inputProps={{ maxLength: 1000 }}
        multiline
        onChange={handleChange}
        placeholder="Tell us your thoughts on this product"
        required={true}
        value={body}
        name="body"
        className={classes.txt}
        error={error}
      />
      <Grid>{minReqChars()}</Grid>
    </Paper>
  );
};

export default ReviewBody;
