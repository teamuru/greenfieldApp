import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RevParentComponent from './RevParentComponent.jsx';

import { fetchReviews, fetchMeta } from '../../actions/reviewsActions';

class ReviewsWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount() {
    const {
      fetchReviews,
      fetchMeta,
      location: { pathname }
    } = this.props;
    // FIXME: get id from route
    fetchReviews(pathname);
    fetchMeta(pathname);
  }
  render() {
    return (
      <div>
        <RevParentComponent />
      </div>
    );
  }
}

ReviewsWrapper.propTypes = {
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
)(ReviewsWrapper);
