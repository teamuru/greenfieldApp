import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

class ReviewsAPICalls extends Component {
  componentDidMount() {
    const { fetchReviews } = this.props;
    fetchReviews(1);
  }
  render() {
    return <div />;
  }
}

ReviewsAPICalls.propTypes = {
  fetchReviews: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (id) => {
    dispatch(fetchReviews(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsAPICalls);

