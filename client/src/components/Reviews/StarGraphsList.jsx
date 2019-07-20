import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import * actions from ''

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  // some functtions here
  handleNormalize(current, total) {
    return (current / total) * 100;
  }

  render() {
    const ratings = [1, 2, 3, 4, 5];
    const { meta } = this.props.reviews;

    return !meta ? (
      <h1> ... Loading</h1>
    ) : (
      // const totalRatings = Object.values(meta.ratings);

      <React.Fragment>
        {ratings.map((element) => {
          {
            /* let normalize = this.handleNormalize() */
          }

          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              <StarGraph variant="determinate" value={element} />
              {console.log(`this.props.reviews.meta`, meta.ratings)}
            </div>
          );
        })}
      </React.Fragment>
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
