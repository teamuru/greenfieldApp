import React from 'react';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';

import { useStyles } from './styles.js';

const Recommend = ({ form, setForm, error }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setForm((prevState) => {
      return { ...prevState, recommend: e.target.value };
    });
  };

  return (
    <Paper className={classes.header} style={{ padding: '50px 20px' }}>
      <Typography className={error ? classes.titleError : classes.title}>
        Do you recommend this product?*
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          name="position"
          value={form.recommend}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="true"
            control={<Radio color="primary" />}
            label="Yes"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="false"
            control={<Radio color="primary" />}
            label="No"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default Recommend;
