import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  normalizeData(obj) {
    const arr = Object.values(obj);
    const total = arr.reduce((a, b) => {
      return a + b;
    });

    return total / 100;
  }

  handleNoRatings(obj) {
    const ratings = [1, 2, 3, 4, 5];

    ratings.map((element) => {
      if (!obj[element]) {
        obj[element] = 0;
      }
    });

    return obj;
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
                value={
                  this.handleNoRatings(meta.ratings)[`${element}`] /
                  this.normalizeData(meta.ratings)
                }
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
