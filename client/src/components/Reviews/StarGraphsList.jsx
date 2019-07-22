import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import * actions from ''

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  // some functtions here
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
          {
            {
              /* let normalize =  */
            }
            {
              /* console.log(`inside map, meta.ratings => `, meta.ratings); */
            }
            {
              /* console.log(`totalReviews`, totalReviews);
            let normalize = this.handleNormalize(
              ratings[element] || 0,
              totalReviews.length
            );
            console.log('normalize', normalize); */
            }
          }

          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              {/* FIXME: get normalize working */}
              <StarGraph
                variant="determinate"
                value={element}
                // value={this.normalize}
              />
              {/* {console.log(`this.props.reviews.meta`, meta)} */}
              {/* {console.log(`totalReviews`, Object.values(meta.ratings))} */}
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
