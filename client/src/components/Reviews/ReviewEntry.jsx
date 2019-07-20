import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import Checklist from '../Product/Checklist.jsx';

const useStyles = makeStyles((theme) => ({
  // font: {
  //   fontSize: 15
  // },
  // root: {
  //   flexGrow: 1
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary
  }
}));

const style = {
  ft: {
    fontSize: 15,
    fontWeight: 'fontWeightBold'
  },
  bg: {
    backgroundColor: '#E5E5E5'
  }
};

function ReviewEntry({ review }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} style={style.ft}>
      <Grid item xs={9}>
        <Grid container justify="space-between" direction="row">
          <Grid item> Placeholder Rating: {review.rating}</Grid>
          <Grid item>{review.reviewer_name}</Grid>
        </Grid>
        <Grid>
          <Grid item>{review.summary}</Grid>
          <Grid item>{review.body}</Grid>
          <Grid
            item
            // style={{ fontSize: 15 }}
          >
            {review.recommend}
          </Grid>
          <Grid
            container
            // alignItems="baseline"
            style={style.bg}
          >
            <Grid item xs={9}>
              Response
            </Grid>
            <Grid item>{review.response}</Grid>
          </Grid>
          <Grid item>Helpful | Yes? ({review.helpfulness}) </Grid>
        </Grid>
        <Grid />
      </Grid>
    </Paper>
  );
}

export default ReviewEntry;
