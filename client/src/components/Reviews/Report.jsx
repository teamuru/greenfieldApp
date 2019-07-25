import React from 'react';
import reportReview from '../../actions/reviewsActions';

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

const RevHelpful = ({ reviewId }) => {
  const classes = useStyles();

  const [report, setReport] = React.useState('Report');

  const handleReport = () => {
    reportReview(reviewId);
    setReport('Review Reported');
  };

  return (
    <span>
      <Button className={classes.button} onClick={handleReport}>
        <span style={{ fontWeight: 400 }}>
          {/* <u>Report</u>{' '} */}
          <u>{report}</u>
        </span>
      </Button>
    </span>
  );
};

export default RevHelpful;
