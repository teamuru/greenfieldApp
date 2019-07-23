import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import * actions from ''

import normalizeData from '../../lib/normalize.js';

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  handleNormalize(current, total) {
    // gives us the number of ratings
    // todo: total is meta
    let overall = Object.values(total.ratings);

    return (current / overall) * 100;
  }

  getTotalReviews(ratings) {
    return Object.values(ratings).length;
  }

  renderRatings() {
    const ratings = [1, 2, 3, 4, 5];
    const { meta } = this.props.reviews;
    // const totalReviews = Object.values(meta.ratings);

    return !meta ? (
      <h1> ... Loading</h1>
    ) : (
      <React.Fragment>
        {/* {console.log(`meta.ratings`, meta.ratings)} */}
        {/* {console.log(`ratings length`, this.getTotalReviews(meta.ratings))} */}
        {ratings.map((element) => {
          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              <StarGraph
                variant="determinate"
                value={element}
                // value={this.normalize}
              />
              {console.log(`meta`, meta)}
            </div>
          );
        })}
      </React.Fragment>
    );
  }

  renderRec() {
    const { meta } = this.props.reviews;
  }

  render() {
    return (
      <div>
        <span> {} Stars *add renderAverageStars </span>
        {} *add recommended
        {this.renderRatings()}
      </div>
    );
  }
}

let mapStateToProps = (store) => ({
  meta: store.meta,
  reviews: store.reviews
});

export default connect(
  mapStateToProps,
  null
)(StarGraphsList);
