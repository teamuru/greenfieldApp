import React, { Component } from 'react';

import { Form, Field } from 'react-final-form';
import { TextField, Radio } from 'final-form-material-ui';

import Attachment from '@material-ui/icons/Attachment';

// import IconButton from '@material-ui/icons/IconButton';

import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel
} from '@material-ui/core';

import descriptions from '../../lib/description';

const onSubmit = (values) => {
  window.alert(JSON.stringify(values, 0, 2));
  console.log(' values from form ', values);
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.headline) {
    errors.headline = 'Required';
  }
  if (!values.review) {
    errors.review = 'Required';
  }
  return errors;
};

const style = {
  ft: {
    fontSize: 20
  },
  head: {
    fontSize: 40,
    fontWeight: 700
  },
  formSt: {
    padding: 20,
    // margin: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '70%',
    maxHeight: '70%',
    fontSize: 20
  }
};

class ReviewForm extends Component {
  render() {
    const ratings = [1, 2, 3, 4, 5];

    return (
      <div style={style.formSt}>
        {/* FIXME: checking descriptions */}
        {console.log(`descriptions: `, descriptions.Fit)}

        <CssBaseline />
        <Typography variant="h6" align="center" component="h1" gutterBottom>
          Create A Review
        </Typography>
        <Form
          style={{ fontSize: 10 }}
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 10 }}>
                <Grid container alignItems="flex-start" spacing={4}>
                  <Grid item xs={6}>
                    <Field
                      // fullWidth
                      style={{ fontSize: 10 }}
                      required
                      name="username"
                      component={TextField}
                      type="text"
                      label="username"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Field
                      fullWidth
                      required
                      name="headline"
                      component={TextField}
                      type="text"
                      label="Add a headline"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="review"
                      fullWidth
                      required
                      component={TextField}
                      type="review"
                      label="Write your review"
                    />
                  </Grid>

                  {/* image upload */}
                  <React.Fragment>
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
                        style={{ fontSize: 16 }}
                        // className={classes.button}
                      >
                        Add image {'  '} <Attachment />
                      </Button>
                    </label>
                  </React.Fragment>

                  {/* ratings radio */}
                  <br />
                  <React.Fragment>
                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Select Rating</FormLabel>
                        <RadioGroup row>
                          {ratings.map((rating) => {
                            return (
                              <div key={rating}>
                                <FormControlLabel
                                  // label="2"
                                  label={`${rating}`}
                                  control={
                                    <Field
                                      name="rating"
                                      component={Radio}
                                      type="radio"
                                      value={`${rating}`}
                                    />
                                  }
                                />
                              </div>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </React.Fragment>

                  {/* submit button */}

                  <Grid item xs={9} style={{ marginTop: 1, align: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    );
  }
}

export default ReviewForm;
