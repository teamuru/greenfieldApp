import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RevParentComponent from './RevParentComponent.jsx';

import { fetchReviews, fetchMeta } from '../../actions/reviewsActions';

class ReviewsAPICalls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount() {
    const { fetchReviews, fetchMeta } = this.props;
    // FIXME: get id from route
    fetchReviews(1);
    fetchMeta(1);
  }
  render() {
    return (
      <div>
        <RevParentComponent />
      </div>
    );
  }
}

ReviewsAPICalls.propTypes = {
  fetchReviews: PropTypes.func.isRequired,
  fetchMeta: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  reviews: store.reviews,
  meta: store.meta
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (id) => {
    dispatch(fetchReviews(id));
  },
  fetchMeta: (id) => {
    dispatch(fetchMeta(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsAPICalls);
