import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry';
import Grid from '@material-ui/core/Grid';

const ReviewList = (props) => {
  // const { reviews } = reviews;
  const arr = [1, 2, 3];
  return (
    <div>
      {/* {reviews.results.map((review) => {
        return console.log('review:', review);
      })} */}
      {arr.map((elem, index) => {
        return (
          <Grid key={index}>
            <ReviewEntry numbers={elem} />
            {console.log(`props`, props)}
          </Grid>
        );
      })}
    </div>
  );
};

export default ReviewList;
