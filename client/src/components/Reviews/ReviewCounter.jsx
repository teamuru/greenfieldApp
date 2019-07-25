import { connect } from 'react-redux';
import React from 'react';

const ReviewCounter = (props) => {
  const { data } = props.reviews;

  return !data ? (
    <span>... Loading no. of reviews</span>
  ) : (
    <div>
      <span> {data.results.length} reviews, sorted by </span>
    </div>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(ReviewCounter);
