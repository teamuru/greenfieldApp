import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import { fetchReviews, showReviews } from '../../actions/reviewsActions';

import ReviewEntry from './ReviewEntry';
import MoreReviews from './MoreReviews';
import AddReviewModal from './AddReviewModal';
import ReviewCounter from './ReviewCounter';
import SelectControl from './Relevance';

// Working code
// class ReviewList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       increment: 2,
//       limit: 2
//     };
//     this.loadMore = this.loadMore.bind(this);
//   }

// Refactored
const ReviewList = (props) => {
  // to get dynamic sorting
  // useEffect(() => {
  //   fetchReviews(productId, 'relevant');
  //   getMeta(productId);
  // }, [productId]);

  const { data } = props.reviews;
  const { fetchReviews } = props;
  const { showReviews } = props;

  return !data ? (
    <h3>...Loading reviews</h3>
  ) : (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <ReviewCounter /> {'   '} <SelectControl />
      </Grid>

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
  // }
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (productId, sort) => {
    dispatch(fetchReviews(productId, sort));
  },
  showReviews: (length) => {
    dispatch(showReviews(length));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);

/**
 * 
 * 
 * 
 * 

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


 
 */
