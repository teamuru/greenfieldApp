import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

// Import actions from the store
import { fetchReviews, fetchMeta } from '../../actions/reviewsActions';

// Child Components
import Recommended from './Recommended.jsx';
import SizeGraph from './SizeGraph.jsx';
import ReviewList from './ReviewList.jsx';
import StarGraphsList from './StarGraphsList.jsx';
import SelectControl from './Relevance';
import AverageRev from './AverageRev';
import ReviewCounter from './ReviewCounter';

// Testing Form: uncomment out to test form
// import Form from './Form/Form';

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

const RevParentComponent = (props) => {
  const classes = useStyles();

  const {
    fetchReviews,
    fetchMeta,
    location: { pathname }
  } = props;

  useEffect(() => {
    fetchReviews(pathname), fetchMeta(pathname);
  }, [pathname]);

  return (
    <div className={classes.root} id="reviews">
      <Grid container spacing={3}>
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
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
          >
            <ReviewCounter /> {'   '} <SelectControl />
          </Grid>
          <div>
            <ReviewList />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews,
  meta: store.meta
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (id) => {
    dispatch(fetchReviews(id));
  },
  fetchMeta: (id) => {
    dispatch(fetchMeta(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RevParentComponent);

// export default RevParentComponent;
