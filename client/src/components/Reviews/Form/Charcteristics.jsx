import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const descriptions = {
  Fit: {
    '1': 'Runs tight',
    '2': 'Runs slightly tight',
    '3': 'Perfect',
    '4': 'Runs slightly long',
    '5': 'Runs long'
  },
  Size: {
    '1': 'A size too small',
    '2': '1/2 a size too small',
    '3': 'Perfect',
    '4': '1/2 a size too big',
    '5': 'A size too wide'
  },
  Length: {
    '1': 'Runs Short',
    '2': 'Runs slightly short',
    '3': 'Perfect',
    '4': 'Runs slightly long',
    '5': 'Runs long'
  },
  Width: {
    '1': 'Too narrow',
    '2': 'Slightly narrow',
    '3': 'Perfect',
    '4': 'Slightly wide',
    '5': 'Too wide'
  },
  Comfort: {
    '1': 'Uncomfortable',
    '2': 'Slightly uncomfortable',
    '3': 'Ok',
    '4': 'Comfortable',
    '5': 'Perfect'
  },
  Quality: {
    '1': 'Poor',
    '2': 'Below average',
    '3': 'What I expected',
    '4': 'Pretty great',
    '5': 'Perfect'
  }
};

const useStyles = makeStyles((theme) => ({
  titleError: {
    color: theme.palette.error.dark
  },
  category: {
    margin: theme.spacing(0),
    fontSize: 15,
    fontWeight: 'bold'
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
    fontSize: 13,
    textAlign: 'center'
  }
}));

const Characteristics = ({ form, setForm, error, meta }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setForm((prevState) => {
      let id = meta.characteristics[e.target.name].id;
      prevState.meta.characteristics[id] = Number(e.target.value);
      return { ...prevState };
    });
  };

  return !meta ? (
    <Typography>... Loading</Typography>
  ) : (
    <Paper>
      <Typography className={error ? classes.titleError : classes.title}>
        Characteristics*
      </Typography>

      {Object.keys(meta.characteristics).map((character) => {
        let id = meta.characteristics[character].id;
        let descriptionList = descriptions[character];
        let selectedValue = form.characteristics[id];
        let selectedDescription = descriptionList[selectedValue];

        console.log(`form`, form);
        console.log(`selectedValue`, selectedValue);

        return (
          <FormControl component="fieldset" key={character}>
            <FormLabel className={classes.category}>
              {character}:{selectedDescription || 'None selected:'}
            </FormLabel>
            <RadioGroup
              name={character}
              value={String(selectedValue) || ''}
              onChange={handleChange}
              row
              // className={classes.group}
            >
              {['1', '2', '3', '4', '5'].map((value) => {
                return (
                  <FormControlLabel
                    value={value}
                    control={<Radio color="primary" />}
                    label={
                      <Typography
                      //  className={classes.label}
                      >
                        {value === '2' || value === '4'
                          ? ''
                          : descriptionList[value]}
                      </Typography>
                    }
                    labelPlacement="bottom"
                    key={value}
                    // className={classes.col}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      })}
    </Paper>
  );
};

let mapStateToProps = (store) => ({
  meta: store.reviews.meta
  // characteristics: store.reviews.meta.characteristics
});

export default connect(mapStateToProps)(Characteristics);
