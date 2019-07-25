import React from 'react';

import { TextField, Box, Typography, Paper } from '@material-ui/core/';
// import Box from '@material-ui/core/Box';

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
        Review Body*
      </Typography>
      <TextField
        inputProps={{ maxLength: 1000 }}
        multiline
        onChange={handleChange}
        placeholder="tell us why you loved this product"
        required={true}
        value={body}
        name="body"
        className={classes.textField}
        error={error}
      />
      <Box>{minReqChars()}</Box>
    </Paper>
  );
};

export default ReviewBody;
