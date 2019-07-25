import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Close, Error, CheckCircle } from '@material-ui/icons';
import { green, red } from '@material-ui/core/colors';

import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';

const variantIcon = {
  error: Error,
  success: CheckCircle
};

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: red[500]
  },
  success: {
    backgroundColor: green[500]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const ReviewsSnackbarWrapper = (props) => {
  const classes = useStyles();
  const { message, onClose, variant } = props;

  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <Close className={classes.icon} />
        </IconButton>
      ]}
    />
  );
};

export const ReviewSnackbar = (props) => {
  const { open, handleClose, errors } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <ReviewsSnackbarWrapper
        onClose={handleClose}
        variant={errors ? 'error' : 'success'}
        message={
          errors
            ? 'Please fill out required fields'
            : `Thank you, you're review has been submitted!`
        }
      />
    </Snackbar>
  );
};
