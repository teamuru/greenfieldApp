import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import { fetchReviews } from '../../actions/reviewsActions';

import ReviewEntry from './ReviewEntry';
import MoreReviews from './MoreReviews';
import AddReviewModal from './AddReviewModal';

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increment: 2,
      limit: 2
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({
      limit: this.state.limit + this.state.increment
    });
  }

  // to get dynamic sorting
  // useEffect(() => {
  //   fetchReviews(productId, 'relevant');
  //   getMeta(productId);
  // }, [productId]);

  render() {
    const { data } = this.props.reviews;
    // const { product } = this.props.data;
    const { fetchReviews } = this.props;

    return !data ? (
      <h3>...Loading reviews</h3>
    ) : (
      <div>
        {data.results.slice(0, this.state.limit).map((review) => {
          return (
            <div key={review.review_id}>
              <ReviewEntry review={review} />
            </div>
          );
        })}

        {/* Buttons */}
        <Grid
          container
          alignItems="baseline"
          spacing={6}
          justify="flex-start"
          direction="row"
        >
          <Grid item onClick={this.loadMore}>
            <MoreReviews />
          </Grid>
          <Grid item>
            <AddReviewModal />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (productId, sort) => {
    dispatch(fetchReviews(productId, sort));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);
