import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import Checklist from '../Product/Checklist.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(30)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary
  }
}));

const style = {
  ft: {
    fontSize: 15,
    // fontWeight: 500,
    spacing: 10
  },
  sum: {
    fontWeight: 700,
    fontSize: 20,
    padding: '30px 0px'
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
          <Grid item letterSpacing={10}>
            {review.reviewer_name}
          </Grid>
        </Grid>
        <Grid>
          {/* Find lighter color */}
          <Grid item style={style.sum}>
            {review.summary}
          </Grid>
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
