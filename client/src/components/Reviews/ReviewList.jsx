import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

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
  }

  loadMore() {
    this.setState(
      {
        limit: this.state.limit + this.state.increment
      },
      () => {
        console.log(`this.state.limit`, this.state.limit);
      }
    );
  }

  render() {
    const { data } = this.props.reviews;
    return !data ? (
      <h3>...Loading reviews</h3>
    ) : (
      <div>
        {/* {data.results.slice(0, 2).map( */}
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

export default connect(mapStateToProps)(ReviewList);
