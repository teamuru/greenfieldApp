import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Check from '@material-ui/icons/CheckCircle';

function VerifyRec({ review }) {
  return review.recommend === 0 ? (
    <span> </span>
  ) : (
    <div>
      <Grid
        container
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ fontSize: 15, padding: '15px 0px' }}
      >
        <Check style={{ fontSize: 20, color: '#4CAF50' }} />

        <span> {'   '} I recommend this product</span>
      </Grid>
    </div>
  );
}

export default VerifyRec;
