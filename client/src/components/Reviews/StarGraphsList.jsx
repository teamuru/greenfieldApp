import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import * actions from ''

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  // some functtions here
  render() {
    const ratings = [1, 2, 3, 4, 5];
    const { meta } = this.props;
    return (
      <React.Fragment>
        {ratings.map((element) => {
          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              <StarGraph variant="determinate" value={element} />
              {console.log(`this.props.reviews.meta`, this.props.reviews.meta)}
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
