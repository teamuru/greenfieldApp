import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReviewEntry from './ReviewEntry';

const ReviewList = (props) => {
  const { reviews } = props;

  return reviews.data ? (
    <div>
      {reviews.data.results.map((review) => {
        return (
          <div key={review.review_id}>
            <ReviewEntry review={review} />
          </div>
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
