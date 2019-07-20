import React from 'react';

import { Paper, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary
  }
}));

function ReviewEntry() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid item xs={9}>
        <Grid container justify="space-between" direction="row">
          <Grid item>stars</Grid>
          <Grid item>User</Grid>
        </Grid>
        <Grid>
          <Grid item>Summary Bold</Grid>
          <Grid item>Body</Grid>
          <Grid item>Recommend Y/N</Grid>
          <Grid
            container
            // alignItems="baseline"
          >
            <Grid item xs={9}>
              Response
            </Grid>
            <Grid item>Response Summary</Grid>
          </Grid>
          <Grid item>Helpful | yes?</Grid>
        </Grid>
        <Grid />
      </Grid>
    </Paper>
  );
}

export default ReviewEntry;
