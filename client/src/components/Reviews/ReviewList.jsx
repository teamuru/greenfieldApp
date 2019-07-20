import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ReviewEntry from './ReviewEntry';

const ReviewList = (props) => {
  const { reviews } = props;

  return reviews.data ? (
    <div>
      {reviews.data.results.map((review) => {
        return (
          <Grid key={review.review_id}>
            <ReviewEntry review={review} />
            {console.log(`each review`, review)}
          </Grid>
        );
      })}
    </div>
  ) : (
    <h1>... Loading</h1>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(ReviewList);
