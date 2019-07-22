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
    fontSize: 12,
    font: 'Roboto'
  }
}));

const style = {
  stars: {
    fontSize: 12,
    padding: '10px 0px'
  },
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
    padding: '40px 0px'
  }
};

function ReviewEntry({ review }) {
  const classes = useStyles();
  return (
    <Box borderBottom={1}>
      <div style={style.bor}>
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
          <Grid item style={style.sum}>
            {review.summary}
          </Grid>
          <Grid item style={style.bod}>
            {review.body}
          </Grid>
          <Grid item style={style.recommend}>
            #recommended: {review.recommend}
          </Grid>
          <Grid container style={style.bg}>
            <Grid item xs={9} style={style.resHead}>
              Response
            </Grid>
            <Grid item xs={9} style={style.resBod}>
              {' '}
              <div>response body {review.response}</div>
            </Grid>
          </Grid>
          <Grid item style={style.helpful}>
            <span>Helpful? </span>
            <Button className={classes.button}>
              <span style={{ fontWeight: 400 }}>
                Yes
                <span style={{ color: '#A9A9A9' }}>
                  ( {review.helpfulness} ){' '}
                </span>
              </span>
            </Button>
            {'  '} | {'  '}
            <Button className={classes.button}>
              <span style={{ fontWeight: 400 }}>Report</span>
            </Button>
          </Grid>
        </Grid>
        <Grid />
      </div>
    </Box>
  );
}

export default ReviewEntry;
