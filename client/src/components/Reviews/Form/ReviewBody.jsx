import React from 'react';

import { TextField, Typography, Paper, Grid } from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';

import { useStyles } from './styles.js';

// const useStyles = makeStyles((theme) => ({
//   label: {
//     fontSize: 15,
//     textAlign: 'right'
//   }
// }));

const style = {
  not: {
    fontSize: 20,
    textAlign: 'justify'
  }
};

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
      <Grid container direction="column" justify="flex-start">
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
      </Grid>
      <Grid>
        <Typography style={style.not}>{minReqChars()}</Typography>
      </Grid>
    </Paper>
  );
};

export default ReviewBody;
