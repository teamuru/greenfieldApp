import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Radio } from 'final-form-material-ui';

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

const onSubmit = (values) => {
  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await sleep(300);
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

class ReviewForm extends Component {
  render() {
    return (
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Create A Review
        </Typography>
        <Form
          onSubmit={onSubmit}
          // initialValues={{ employed: true, stooge: 'larry' }}
          validate={validate}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={8}>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
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
                  <Grid item>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Select Rating</FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          label="1"
                          control={
                            <Field
                              name="rating"
                              component={Radio}
                              type="radio"
                              value="1"
                            />
                          }
                        />
                        <FormControlLabel
                          label="2"
                          control={
                            <Field
                              name="rating"
                              component={Radio}
                              type="radio"
                              value="2"
                            />
                          }
                        />
                        <FormControlLabel
                          label="3"
                          control={
                            <Field
                              name="rating"
                              component={Radio}
                              type="radio"
                              value="3"
                            />
                          }
                        />
                        <FormControlLabel
                          label="4"
                          control={
                            <Field
                              name="rating"
                              component={Radio}
                              type="radio"
                              value="4"
                            />
                          }
                        />
                        <FormControlLabel
                          label="5"
                          control={
                            <Field
                              name="rating"
                              component={Radio}
                              type="radio"
                              value="5"
                            />
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={9} style={{ marginTop: 1 }}>
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
