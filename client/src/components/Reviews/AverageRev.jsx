import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import calculateAverage from '../../lib/calculateAverageRate.js';

const style = {
  ft: {
    fontSize: 50
  },
  st: {
    fontSize: 30,
    padding: '0px 0px 50px 60px'
  }
};

// Summary of the average rating alongside the stars
// from /meta route
class AverageRev extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { meta } = this.props.reviews;
    return !meta ? (
      <h5>..Loading</h5>
    ) : (
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <span style={style.ft}>
          {/*  Using a helper function to get the avg rating */}
          {calculateAverage(meta.ratings).toFixed(1)}
        </span>
        <span>
          <Rating
            readOnly
            size="small"
            value={calculateAverage(meta.ratings).toFixed(1)}
            max={5}
          />
        </span>
      </Grid>
    );
  }
}

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(AverageRev);

// export default AverageRev;
