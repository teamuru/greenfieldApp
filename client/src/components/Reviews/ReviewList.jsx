import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ReviewEntry from './ReviewEntry';

const ReviewList = (props) => {
  const arr = [1, 2, 3];
  const { reviews } = props;
  // console.log(this.props);

  return reviews.data ? (
    <div>
      {arr.map((elem, index) => {
        return (
          <Grid>
            <ReviewEntry key={index} numbers={elem} />
            {/* {console.log(`reviews inside list`, reviews)} */}
            {console.log(`reviews`, reviews)}
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

// export default ReviewList;
