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
    putHelpful(reviewId);
    updateHelpful(helpful + 1);
  };

  return (
    <span>
      <Button className={classes.button} onClick={handleClick}>
        <span style={{ fontWeight: 400 }}>
          <u>Yes</u>{' '}
          <span style={{ color: '#A9A9A9' }}>( {helpfulness} ) </span>
        </span>
      </Button>
    </span>
  );
};

export default RevHelpful;
