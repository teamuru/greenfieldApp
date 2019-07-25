import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Box, Paper, Grid } from '@material-ui/core';

import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

import RevSummary from './ReviewHeader';
import ReviewBody from './ReviewBody';
import Username from './Username';
import Email from './Email';
import Recommend from './Recommend';
// import Recommend from './formComponents/Recommend.jsx';
// import OverallRating from './formComponents/OverallRating.jsx';
// import Characteristics from './Charcteristics';
// import ReviewBody from './formComponents/ReviewBody.jsx';
// import Nickname from './formComponents/Nickname.jsx';
// import Email from './formComponents/Email.jsx';
// import Images from './formComponents/Images.jsx';
import { validate } from './validate.js';
// import { FormSnackbar } from '../SnackBar.jsx';

const defaultForm = {
  rating: 0,
  recommend: '',
  characteristics: {},
  summary: '',
  body: '',
  email: '',
  name: '',
  photos: []
};

const useStyles = makeStyles((theme) => ({
  errors: {
    color: theme.palette.error.dark,
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
      props.submitForm(form);
      props.handleClose();
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
      <ul className={classes.errors}>
        You must enter the following:
        {Object.values(errors).map((err) => {
          return (
            <li className={classes.error} key={err}>
              {err}
            </li>
          );
        })}
      </ul>
    );
  };

  const checkErrors = (input) => {
    return errors.hasOwnProperty(input);
  };

  return form ? (
    <React.Fragment>
      <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>

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

      <Recommend
        form={form}
        setForm={setForm.bind(this)}
        error={checkErrors('recommend')}
      />

      {/* <Characteristics
        form={form}
        setForm={setForm}
        error={checkErrors('characteristics')}
      /> */}
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );
};

let mapStateToProps = (store) => ({
  productId: store.product,
  meta: store.reviews.meta
});

export default connect(
  mapStateToProps
  // ,
  // actions
)(Form);
