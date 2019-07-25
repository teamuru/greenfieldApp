import React from 'react';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Gtid,
  Typography
} from '@material-ui/core';

import { useStyles } from './inputStyle.js';

const Recommend = ({ form, setForm, error }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setForm((prevState) => {
      return { ...prevState, recommend: e.target.value };
    });
  };

  return (
    <Paper>
      <h4 className={error ? classes.titleError : classes.title}>
        Do you recommend this product?*
      </h4>
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
