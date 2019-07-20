import React from 'react';
import ReviewEntry from './ReviewEntry';
import Grid from '@material-ui/core/Grid';

const ReviewList = ({ reviews }) => {
  // const { reviews } = reviews;
  const arr = [1, 2, 3];
  return (
    <div>
      {/* {reviews.results.map((review) => {
        return console.log('review:', review);
      })} */}
      {arr.map((elem, index) => {
        return (
          <Grid key={index} container>
            <ReviewEntry numbers={elem} />
            {console.log(`reviews`, reviews)}
          </Grid>
        );
      })}
    </div>
  );
};

export default ReviewList;
