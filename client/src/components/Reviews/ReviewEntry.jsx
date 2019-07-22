import React from 'react';
import { Paper, Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

// import Checklist from '../Product/Checklist.jsx';
import Relevance from './Relevance.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(30)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary
  },
  button: {
    margin: theme.spacing(0),
    padding: theme.spacing(-1),
    fontSize: 12
  }
}));

const style = {
  userSum: {
    fontSize: 12,
    color: '#A9A9A9'
    // ,
    // spacing: 20
  },
  sum: {
    fontWeight: 700,
    fontSize: 17,
    padding: '10px 0px'
  },
  bod: {
    fontSize: 15,
    padding: '10px 0px'
  },
  resHead: {
    fontWeight: 700,
    fontSize: 15,
    padding: '0px 10px'
  },
  resBod: {
    fontSize: 15,
    padding: '10px 10px'
  },
  recommend: {
    fontSize: 15
  },
  bg: {
    backgroundColor: '#E5E5E5',
    padding: '10px 0px'
  },
  helpful: {
    fontSize: 12,
    padding: '0px -10px'
  },
  bor: {
    border: 2,
    borderColor: 'text.primary'
  }
};

function ReviewEntry({ review }) {
  const classes = useStyles();
  return (
    <Box style={style.bor}>
      <Paper
        className={classes.paper}

        // borderColor="text.primary"
      >
        {/* <Grid item xs={9}> */}
        <Grid container justify="space-between" direction="row">
          <Grid item style={{ fontSize: 15 }}>
            {' '}
            Placeholder Rating: {review.rating}
          </Grid>
          <Grid item style={style.userSum}>
            {review.reviewer_name}, {moment(review.date).format('MMM Do YY')}
          </Grid>
        </Grid>
        <Grid>
          {/* Find lighter color */}
          <Grid item style={style.sum}>
            {review.summary}
          </Grid>
          <Grid item style={style.bod}>
            {review.body}
          </Grid>
          <Grid item style={style.recommend}>
            #recommended: {review.recommend}
          </Grid>
          <Grid
            container
            // alignItems="baseline"
            style={style.bg}
          >
            {/* <h6>Response</h6>
          <br />
          <div>response body</div> */}
            <Grid item xs={9} style={style.resHead}>
              Response
            </Grid>
            <Grid item xs={9} style={style.resBod}>
              {' '}
              <div>response body {review.response}</div>
            </Grid>
          </Grid>
          <Grid item style={style.helpful}>
            <span>Helpful |</span>
            <Button color="primary" className={classes.button}>
              <span>Yes?</span>
            </Button>
            <span style={{ color: '#A9A9A9' }}>({review.helpfulness}) </span>
          </Grid>
        </Grid>
        <Grid />
        {/* </Grid> */}
      </Paper>
    </Box>
  );
}

export default ReviewEntry;
