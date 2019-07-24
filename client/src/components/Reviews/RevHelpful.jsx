import React from 'react';
import { putHelpful } from '../../actions/reviewsActions';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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

const RevHelpful = ({ reviewId, helpfulness }) => {
  const classes = useStyles();

  const [helpful, updateHelpful] = React.useState(helpfulness);

  const handleClick = () => {
    console.log(`inside handleClick => `, reviewId);
    putHelpful(reviewId);
    updateHelpful(helpful + 1);
  };

  // Attempt 1
  // const handleClick = (e) => {
  //   putHelpful(e.target.value);
  //   // updateHelpful(helpful + 1);
  //   console.log(`e.target.value inside updateHelpful`, e.target.value);
  // };

  return (
    <span>
      <Button
        className={classes.button}
        // // id={review.review_id}
        // value={review.review_id}
        onClick={handleClick}
      >
        <span style={{ fontWeight: 400 }}>
          <u>Yes</u>{' '}
          <span style={{ color: '#A9A9A9' }}>( {helpfulness} ) </span>
          <h1> review_id => {reviewId} </h1>
        </span>
      </Button>
    </span>
  );
};

export default RevHelpful;
