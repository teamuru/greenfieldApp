import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import * actions from ''

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  // some functtions here
  handleNormalize(current, total) {
    // gives us the number of ratings
    // let overall = Object.values(total.ratings);
    return (current / total) * 100;
  }

  renderRatings() {
    const ratings = [1, 2, 3, 4, 5];
    const { meta } = this.props.reviews;

    return !meta ? (
      <h1> ... Loading</h1>
    ) : (
      // const totalRatings = Object.values(meta.ratings);

      <React.Fragment>
        {ratings.map((element) => {
          {
            const totalReviews = Object.values(meta.ratings);
            let normalize = this.handleNormalize(
              ratings[element],
              Object.values(meta.ratings).length
            );
          }

          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              {/* FIXME: get normalize working */}
              <StarGraph variant="determinate" value={element} />
              {console.log(`this.props.reviews.meta`, meta)}
              {console.log(`totalReviews`, Object.values(meta.ratings))}
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
