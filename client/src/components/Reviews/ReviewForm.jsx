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

// import AddAttachment from './add'

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
    padding: 16,
    margin: 'auto',
    maxWidth: '60%',
    maxHeight: '70%',
    fontSize: 20
  }
};

class ReviewForm extends Component {
  render() {
    const ratings = [1, 2, 3, 4, 5];

    return (
      <div style={style.formSt}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Create A Review
        </Typography>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 10 }}>
                <Grid container alignItems="flex-start" spacing={4}>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="username"
                      component={TextField}
                      type="text"
                      label="username"
                      // fontSize={20}
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
                  <div>
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
                        // className={classes.button}
                      >
                        Upload
                      </Button>
                    </label>
                  </div>

                  {/* ratings */}
                  <br />
                  <div>
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

                      {ratings.map((rating) => {
                        return (
                          <div>
                            <h5>rating</h5>
                          </div>
                        );
                      })}
                    </Grid>
                  </div>

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
