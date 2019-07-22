import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Children Components
import MoreReviews from './MoreReviews';
import AddReviewModal from './AddReviewModal.jsx';
import Recommended from './Recommended.jsx';
import ComfortGraph from './ComfortGraph.jsx';
import SizeGraph from './SizeGraph.jsx';
import ReviewList from './ReviewList.jsx';
import StarGraphsList from './StarGraphsList.jsx';
import Relevance from './Relevance';
import AverageRev from './AverageRev';

const useStyles = makeStyles((theme) => ({
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>RATINGS AND REVIEWS</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* <Grid item xs> */}
        <Grid item xs>
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

        <Grid item xs={9}>
          <Grid style={{ fontSize: 15, fontWeight: 700 }}>
            248 reviews, sorted by
            <Relevance />
          </Grid>

          <Grid item>
            <ReviewList />
          </Grid>

          <Grid
            container
            alignItems="baseline"
            spacing={6}
            justify="flex-start"
            direction="row"
          >
            <Grid item>
              <MoreReviews />
            </Grid>
            <Grid item>
              <AddReviewModal />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RevParentComponent;
