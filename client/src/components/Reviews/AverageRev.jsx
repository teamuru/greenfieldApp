import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rating from '@material-ui/lab/Rating';

import calculateAverage from '../../lib/calculateAverageRate.js';

const style = {
  ft: {
    fontSize: 40
  },
  st: {
    fontSize: 15,
    padding: '0px 0px 50px 60px'
  }
};

class AverageRev extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  render() {
    const { meta } = this.props.reviews;
    return meta ? (
      <h5>...Loading </h5>
    ) : (
      <React.Fragment>
        <span style={style.ft}>3.5</span>
        {/* {console.log(`props`, this.props.reviews.meta.ratings)} */}
        <Rating readOnly size="small" value={3.25} max={5} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(AverageRev);

// export default AverageRev;
