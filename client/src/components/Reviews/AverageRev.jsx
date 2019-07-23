import React, { Component } from 'react';
import Grid from '@material-ui/core';
import Rating from 'material-ui-rating';

const style = {
  ft: {
    fontSize: 40
  },
  st: {
    fontSize: 15,
    padding: '0px 0px 50px 60px'
  }
};

class AverageRev extends Component {
  render() {
    return (
      <React.Fragment>
        <span style={style.ft}>3.5</span>
        <span style={style.st}>placeholder</span>
        <Rating
          value={3.25}
          max={5}
          // onChange={(value) => console.log(`Rated with value ${value}`)}
        />
      </React.Fragment>
    );
  }
}

export default AverageRev;
