import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

// Children Components

import Recommended from './Recommended.jsx';
import SizeGraph from './SizeGraph.jsx';
import ReviewList from './ReviewList.jsx';
import StarGraphsList from './StarGraphsList.jsx';
import Relevance from './Relevance';
import AverageRev from './AverageRev';
import ReviewCounter from './ReviewCounter';
import Form from './Form/Form';

// Testing Form
import ReviewForm from './ReviewForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '40px 0px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary,
    fontSize: 15
  }
}));

const RevParentComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="reviews">
      <Grid
        container
        spacing={3}
        // direction="row"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>RATINGS AND REVIEWS</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Paper className={classes.paper}>
            <AverageRev />
          </Paper>
          <Paper className={classes.paper}>
            <Recommended />
          </Paper>
          <Paper className={classes.paper}>
            <StarGraphsList />
          </Paper>
          <Paper className={classes.paper}>
            <SizeGraph />
          </Paper>
        </Grid>

        <Grid item xs={9} style={{ fontSize: 20, fontWeight: 700 }}>
          <Grid container direction="row" justify="flex-start" alignItems="flex-end">
            <ReviewCounter />
            <Relevance />
          </Grid>
          <div>
            <ReviewList />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RevParentComponent;
