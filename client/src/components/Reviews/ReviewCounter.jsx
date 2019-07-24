import { connect } from 'react-redux';
import React from 'react';
import { node } from 'prop-types';

const ReviewCounter = (props) => {
  const { data } = props.reviews;

  return !data.results ? (
    <span>... Loading no. of reviews</span>
  ) : (
    <div>
      <span> {data.results.length} </span>
    </div>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(ReviewCounter);

// export default ReviewCounter;
