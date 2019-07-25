import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import RevSummary from './ReviewHeader';
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
    //returns an arr or errors or false
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
      {/* <DialogTitle id="form-dialog-title">Write Your Review </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>About {props.product.name}</DialogContentText> */}

      <RevSummary
        summary={form.summary}
        handleChange={handleChange.bind(this)}
        error={checkErrors('summary')}
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
