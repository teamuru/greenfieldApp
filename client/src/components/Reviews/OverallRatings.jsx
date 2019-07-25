import React from 'react';

import { Grid, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

// import { useStyles } from './inputStyle.js';

const OverallRating = ({ 
  // form, 
  setForm, error }) => {
  // const classes = useStyles();

  const renderMeaning = (rating) => {
    let ratings = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great'
    };
    return <div> {ratings[rating]} </div>;
  };

  const handleChange = (e, newValue) => {
    setForm((prevState) => {
      return { ...prevState, rating: newValue };
    });
  };

  return (
    <Box>
      <h4 
      // className={error ? classes.titleError : classes.title}
      >
        Overall Rating*
      </h4>
      <Grid container direction="row">
        <Rating
          name="rating"
          value={form.rating}
          onChange={handleChange}
          precision={1}
        />
        {renderMeaning(form.rating)}
      </Grid>
    </Box>
  );
};

export default OverallRating;
