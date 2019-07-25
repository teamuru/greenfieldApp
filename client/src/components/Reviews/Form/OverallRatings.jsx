import React from 'react';

import { Typography, Paper, Grid } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from './styles';

const Overall = ({ form, setForm, error }) => {
  const classes = useStyles();

  const renderMeaning = (rating) => {
    let ratings = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great'
    };
    return <span> {ratings[rating]} </span>;
  };

  const handleChange = (e, newValue) => {
    setForm((prevState) => {
      return { ...prevState, rating: newValue };
    });
  };

  return (
    <Paper className={classes.header}>
      <Typography className={error ? classes.titleError : classes.title}>
        Overall Rating*
      </Typography>
      <Grid container direction="row">
        <Rating
          name="rating"
          value={form.rating}
          onChange={handleChange}
          precision={1}
        />
        {renderMeaning(form.rating)}
      </Grid>
    </Paper>
  );
};

export default Overall;
