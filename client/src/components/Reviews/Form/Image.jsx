import React from 'react';

import { Grid, Button, Paper, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Attachment from '@material-ui/icons/Attachment';

const Image = () => {
  return (
    <React.Fragment>
      <Paper>
        <Grid xs={8} direction="row-reverse">
          <input
            accept="image/*"
            // className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button
              // variant="raised"
              component="span"
              style={{ fontSize: 20 }}
              // className={classes.button}
            >
              <Typography>Add image</Typography>
              {'  '} <Attachment />
            </Button>
          </label>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Image;
