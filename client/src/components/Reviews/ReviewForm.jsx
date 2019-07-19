import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  // Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  // FormGroup,
  FormControl,
  FormControlLabel
} from '@material-ui/core';

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
      // <div> TEST </div>

      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Create A Review
        </Typography>
        {/* <Form
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
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="rating"
                      component={Select}
                      label="Select a Rating"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
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
            {/* </form> */}
        {/* )} /> */}
      </div>
    );
  }
}

export default ReviewForm;
