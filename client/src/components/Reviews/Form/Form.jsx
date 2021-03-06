import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

import {
  DialogActions,
  Button,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';

import * as actions from '../../../actions/reviewsActions';

// Validation function
import { validate } from './validate.js';

// Components for the Form
import { ReviewSnackbar } from './Snackbar';
import RevSummary from './ReviewHeader';
import ReviewBody from './ReviewBody';
import Username from './Username';
import Email from './Email';
import Recommend from './Recommend';
import Overall from './OverallRatings';
import Fit from './Fit';
import Length from './Length';
import Comfort from './Comfort';
import Size from './Size';
import Quality from './Quality';
import Width from './Width';
import Image from './Image';

const defaultForm = {
  rating: 0,
  recommend: '',
  characteristics: {
    fit: ''
  },
  fit: '',
  length: '',
  comfort: '',
  size: '',
  width: '',
  quality: '',
  summary: '',
  body: '',
  email: '',
  name: '',
  photos: []
};

const useStyles = makeStyles((theme) => ({
  errors: {
    color: red[500],
    padding: theme.spacing(0)
  },
  error: {
    marginLeft: theme.spacing(2)
  }
}));

const Form = (props) => {
  console.log(`props from form`, props);
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState(false);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleChange = (e) => {
    e.persist();
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    let errorList = validate(form, 'reviews', props.meta.characteristics);

    setErrors(errorList);

    if (!errorList) {
      props.postReview(form, props.productId);
    }

    setOpen(true);
  };

  const handleClose = (e, reason) => {
    setOpen(false);
  };

  const renderErrors = () => {
    if (!errors) {
      return;
    }

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <ul
          className={classes.errors}
          style={{ fontSize: 20, align: 'center' }}
        >
          Please fill out the following in order to submit:
          {Object.values(errors).map((err) => {
            return (
              <li className={classes.error} key={err}>
                {err}
              </li>
            );
          })}
        </ul>
      </Grid>
    );
  };

  const checkErrors = (input) => {
    return errors.hasOwnProperty(input);
  };

  return form ? (
    <Paper>
      <Paper>
        <Typography variant="h6" align="center" component="h4" gutterBottom>
          Create A Review
        </Typography>
      </Paper>

      <Username
        name={form.name}
        handleChange={handleChange.bind(this)}
        error={checkErrors('name')}
      />

      <Email
        name={form.name}
        handleChange={handleChange.bind(this)}
        error={checkErrors('email')}
      />

      <RevSummary
        summary={form.summary}
        handleChange={handleChange.bind(this)}
        error={checkErrors('summary')}
      />

      <ReviewBody
        body={form.body}
        handleChange={handleChange.bind(this)}
        error={checkErrors('body')}
      />

      {/* Characteristics */}
      <Fit form={form} setForm={setForm} />
      <Size form={form} setForm={setForm} />
      <Length form={form} setForm={setForm} />
      <Width form={form} setForm={setForm} />
      <Quality form={form} setForm={setForm} />
      <Comfort form={form} setForm={setForm} />
      <Quality form={form} setForm={setForm} />

      {/* Attach Image */}
      <Image />

      {/* Recommend */}
      <Recommend
        form={form}
        setForm={setForm.bind(this)}
        error={checkErrors('recommend')}
      />

      {/* Overall Rating */}

      <Overall
        form={form}
        setForm={setForm.bind(this)}
        error={checkErrors('rating')}
      />

      {/* Error Message */}
      {renderErrors()}

      <DialogActions>
        <Button onClick={props.handleClose} variant="contained" color="primary">
          Cancel
        </Button>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>

        {/* Snackbar */}
        <ReviewSnackbar open={open} handleClose={handleClose} errors={errors} />
      </DialogActions>
    </Paper>
  ) : (
    <div>Loading...</div>
  );
};

let mapStateToProps = (store) => ({
  productId: store.product,
  meta: store.reviews.meta
});

export default connect(
  mapStateToProps,
  actions
)(Form);
