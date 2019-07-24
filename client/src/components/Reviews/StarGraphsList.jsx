import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import normalizeData from '../../lib/normalize.js';

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  handleNormalize(current, total) {
    let overall = Object.values(total.ratings);

    return (current / overall) * 100;
  }

  getTotalReviews(ratings) {
    return Object.values(ratings).length;
  }

  renderRatings() {
    const ratings = [1, 2, 3, 4, 5];
    const { meta } = this.props.reviews;

    return !meta ? (
      <h1> ... Loading</h1>
    ) : (
      <React.Fragment>
        {ratings.map((element) => {
          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              <StarGraph
                variant="determinate"
                // value={element}
                // value={`${meta.ratings[`${element}`] /
                // normalizeData(meta.ratings)}`}

                value={meta.ratings[`${element}`] / normalizeData(meta.ratings)}
              />
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
        {/* FIXME: */}
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
