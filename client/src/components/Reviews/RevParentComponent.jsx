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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary
  }
}));

const RevParentComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Ratings and Reviews</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* <Grid item xs> */}
        <Grid item xs>
          <Paper className={classes.paper}>Rating and Star</Paper>
          <Paper className={classes.paper}>
            <Recommended />
          </Paper>
          <Paper className={classes.paper}>
            <StarGraphsList />
          </Paper>
          <Paper className={classes.paper}>
            <SizeGraph />
          </Paper>
          <Paper className={classes.paper}>
            <ComfortGraph />
          </Paper>
        </Grid>

        {/* sortby extends all the way */}
        <Grid item xs={9}>
          <Grid>
            <Paper className={classes.paper}>
              sorted by{' '}
              <span
              // FIXME: underline true
              //  style={{ disableUnderline: true }}
              >
                relevance
              </span>
            </Paper>
          </Grid>

          <Grid
            item
            // xs={9}
          >
            <ReviewList />
          </Grid>

          {/* Bottom portion */}
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
