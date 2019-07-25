import React from 'react';
import moment from 'moment';

import Rating from '@material-ui/lab/Rating';
import { Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VerifyRec from './VerifyRec';
import ReviewResponse from './ReviewResponse';
import RevHelpful from './RevHelpful';

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
    // fontWeight: 700,
    fontSize: 17,
    padding: '10px 0px'
  },
  bod: {
    fontSize: 15,
    fontSize: 300,
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

const ReviewEntry = ({ review }) => {
  const classes = useStyles();
  return (
    <Box borderBottom={1}>
      <div style={style.bor}>
        <Grid container justify="space-between" direction="row">
          {/* Star Rating */}
          <Grid item style={{ fontSize: 15 }}>
            {' '}
            <Rating readOnly value={review.rating} max={5} size="small" />
          </Grid>

          {/* Usernmae and date */}
          <Grid item style={style.userSum}>
            <b>{review.reviewer_name}, </b>
            {moment(review.date).format('MMMM Do, YYYY')}
          </Grid>
        </Grid>

        {/* Summary */}
        <Grid>
          <Grid item style={style.sum}>
            {review.summary}
          </Grid>

          {/* Body */}
          <Grid item style={style.bod}>
            {review.body}
          </Grid>
          <Grid item style={style.recommend}>
            <VerifyRec review={review} />
            {/* #recommended: {review.recommend} */}
          </Grid>
          <Grid container style={style.bg}>
            <Grid item xs={9} style={style.resHead}>
              Response
            </Grid>
            <Grid item xs={9} style={style.resBod}>
              {' '}
              <div>
                {/* {review.response} */}
                <ReviewResponse review={review} />
              </div>
            </Grid>
          </Grid>
          <Grid item style={style.helpful}>
            <span>Helpful? </span>
            <RevHelpful
              reviewId={review.review_id}
              helpfulness={review.helpfulness}
            />
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
};

export default ReviewEntry;
