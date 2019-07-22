import React, { Component } from 'react';
import Grid from '@material-ui/core';

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
      </React.Fragment>
    );
  }
}

export default AverageRev;
