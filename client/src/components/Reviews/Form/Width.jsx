import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const descriptions = [
  'Poor',
  'Below average',
  'What I expected',
  'Pretty great',
  'Perfect'
];

const useStyles = makeStyles((theme) => ({
  titleError: {
    color: theme.palette.error.dark
  },
  title: {
    padding: '20px'
  },

  group: {
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(4)
  },
  col: {
    margin: theme.spacing(0),
    width: 80,
    alignContent: 'center'
  },
  label: {
    fontSize: 15,
    textAlign: 'center'
  }
}));

const Width = ({ form, setForm, error, meta }) => {
  const classes = useStyles();
  console.log(`form`, form);

  const handleChange = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        width: e.target.value
      };
    });
  };

  return !meta ? (
    <Typography>... Loading</Typography>
  ) : (
    <Paper className={classes.header} style={{ padding: '50px 20px' }}>
      <Typography className={error ? classes.titleError : classes.title}>
        How was the Width?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          name="position"
          value={form.width}
          onChange={handleChange}
          row
        >
          {descriptions.map((description, index) => {
            return (
              <div key={index}>
                <FormControlLabel
                  value={`${index + 1}`}
                  control={<Radio color="secondary" />}
                  label={index === 1 || index === 3 ? '' : description}
                  labelPlacement="bottom"
                />
              </div>
            );
          })}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

let mapStateToProps = (store) => ({
  meta: store.reviews.meta
});

export default connect(mapStateToProps)(Width);
