import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const StarGraph = withStyles({
  root: {
    height: 12,
    backgroundColor: '#14213D',
    marginTop: '4px'
  },
  bar: {
    backgroundColor: '#FCA311'
  }
})(LinearProgress);

export default StarGraph
