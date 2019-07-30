import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

// Styline for GraphsList
const StarGraph = withStyles({
  root: {
    height: 12,
    backgroundColor: '#E5E5E5',
    marginTop: '4px'
  },
  bar: {
    backgroundColor: '#FCA311'
  }
})(LinearProgress);

export default StarGraph;
