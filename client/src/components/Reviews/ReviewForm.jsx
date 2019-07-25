import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';
import { TextField, Radio } from 'final-form-material-ui';

import Attachment from '@material-ui/icons/Attachment';
import Rating from '@material-ui/lab/Rating';
import OverallRating from './Form/OverallRatings';
import postReview from '../../actions/reviewsActions';

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
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    fontSize: 20,
    overflow: 'auto'
  }
};

// class ReviewForm extends Component {
const ReviewForm = ({ reviews }) => {
  // render() {
  const ratings = [1, 2, 3, 4, 5];
  const { meta } = reviews;
  const [value, setValue] = React.useState(0);

  console.log(`reviews.meta inside form`, reviews.meta);
  return !meta ? (
    <Typography>... Loading Form</Typography>
  ) : (
    <div style={style.formSt}>
      <CssBaseline />
      <Typography variant="h6" align="center" component="h4" gutterBottom>
        Create A Review
      </Typography>

      {/* Text Inputs */}
      <Form
        // FIXME: overflow might be able to be taken out
        style={{ fontSize: 10 }}
        onSubmit={onSubmit}
        validate={validate}
        // Handle Submission Function
        render={({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 10 }}>
              <Grid container alignItems="flex-start" spacing={4}>
                {/* Username */}
                <Grid item xs={7}>
                  <Field
                    fullWidth
                    // FIXME: adjust font
                    style={{ fontSize: 10 }}
                    required
                    name="username"
                    component={TextField}
                    type="text"
                    label="username"
                  />
                </Grid>

                {/* Headline */}
                <Grid item xs={7}>
                  <Field
                    fullWidth
                    required
                    // value={`${meta.product_id}`}
                    name="headline"
                    component={TextField}
                    type="text"
                    label="Add a headline"
                  />
                </Grid>

                {/* Review Body */}
                <Grid item xs={10}>
                  <Field
                    name="review"
                    fullWidth
                    required
                    component={TextField}
                    type="review"
                    label="Write your review"
                  />
                </Grid>

                {/* Fit */}
                <React.Fragment>
                  <Grid item xs={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">How was the fit?</FormLabel>
                      <RadioGroup row>
                        {descriptions.Fit.map((description, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                label={`${description}`}
                                control={
                                  <Field
                                    name="fit"
                                    component={Radio}
                                    type="radio"
                                    value={`${index}`}
                                  />
                                }
                              />
                              <br />
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </React.Fragment>

                {/* Size */}
                <React.Fragment>
                  <Grid item xs={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        How was the Size?{' '}
                      </FormLabel>
                      <RadioGroup row>
                        {descriptions.Size.map((description, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                label={`${description}`}
                                control={
                                  <Field
                                    name="size"
                                    component={Radio}
                                    type="radio"
                                    value={`${index}`}
                                  />
                                }
                              />
                              <br />
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </React.Fragment>

                {/* Length */}
                <React.Fragment>
                  <Grid item xs={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        How was the Length?{' '}
                      </FormLabel>
                      <RadioGroup row>
                        {descriptions.Length.map((description, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                label={`${description}`}
                                control={
                                  <Field
                                    name="Length"
                                    component={Radio}
                                    type="radio"
                                    value={`${index}`}
                                  />
                                }
                              />
                              <br />
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </React.Fragment>

                {/* Width */}
                <React.Fragment>
                  <Grid item xs={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        How was the Width?{' '}
                      </FormLabel>
                      <RadioGroup row>
                        {descriptions.Width.map((description, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                label={`${description}`}
                                control={
                                  <Field
                                    name="Width"
                                    component={Radio}
                                    type="radio"
                                    value={`${index}`}
                                  />
                                }
                              />
                              <br />
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </React.Fragment>

                {/* Comfort */}
                <React.Fragment>
                  <Grid item xs={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        How was the Comfort?{' '}
                      </FormLabel>
                      <RadioGroup row>
                        {descriptions.Comfort.map((description, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                label={`${description}`}
                                control={
                                  <Field
                                    name="Comfort"
                                    component={Radio}
                                    type="radio"
                                    value={`${index}`}
                                  />
                                }
                              />
                              <br />
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </React.Fragment>

                {/* Quality */}
                <React.Fragment>
                  <Grid item xs={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        How was the Quality?{' '}
                      </FormLabel>
                      <RadioGroup row>
                        {descriptions.Quality.map((description, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                label={`${description}`}
                                control={
                                  <Field
                                    name="Quality"
                                    component={Radio}
                                    type="radio"
                                    value={`${index}`}
                                  />
                                }
                              />
                              <br />
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </React.Fragment>

                {/* image upload */}
                <React.Fragment>
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
                        style={{ fontSize: 16 }}
                        // className={classes.button}
                      >
                        Add image {'  '} <Attachment />
                      </Button>
                    </label>
                  </Grid>
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

                {/* Star Rating */}

                {/* <React.Fragment>
                  <Grid>
                    <OverallRating
                      // form={form}
                      setForm={setForm.bind(this)}
                      error={checkErrors('rating')}
                    />
                  </Grid>
                </React.Fragment> */}

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
  // }
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

// export default ReviewForm;
export default connect(mapStateToProps)(ReviewForm);
