import React from 'react';

import { TextField, Typography, Paper, Grid } from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 30,
    textAlign: 'center'
  }
}));

const ReviewBody = ({ body, handleChange, error }) => {
  const classes = useStyles();
  const minReqChars = () => {
    let remainingChars = 50 - body.length;
    return remainingChars > 0
      ? `Your response needs ${remainingChars} more characters, type away!`
      : 'you may submit!';
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
      <Typography className={classes.label}>{minReqChars()}</Typography>
    </Paper>
  );
};

export default ReviewBody;
