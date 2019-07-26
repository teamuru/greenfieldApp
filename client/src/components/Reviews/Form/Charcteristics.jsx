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

const Characteristics = ({ form, setForm, error, meta }) => {
  const classes = useStyles();
  const ratings = ['1', '2', '3', '4', '5'];
  console.log(`form`, form);

  const handleChange = (e) => {
    // e.preventDefault();
    setForm((prevState) => {
      // console.log(`1 before`);
      let id = meta.characteristics[e.target.name].id;
      // console.log(`1 after`);
      prevState.meta.characteristics[id] = Number(e.target.value);
      console.log(`prevState `, prevState);
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

      {Object.keys(meta.characteristics).map((character, index) => {
        console.log(`1. form`, form);
        const id = meta.characteristics[character].id;
        console.log(`2. id`, id);
        const allDescriptions = descriptions[character];

        console.log(`3. allDescriptions`, allDescriptions);
        const selectedVal = form.characteristics[id];
        console.log(`4. selectedVal`, selectedVal);
        const selectedDes = allDescriptions[selectedVal];
        console.log(`5. selectedDes`, selectedDes);

        return (
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            key={index}
          >
            <FormControl component="fieldset" key={character}>
              <FormLabel>
                {character}:{selectedDes}
              </FormLabel>
              <RadioGroup
                name={character}
                value={String(selectedVal) || ''}
                onChange={handleChange}
                row
                className={classes.group}
              >
                {ratings.map((value, innerInd) => {
                  return (
                    <Grid key={innerInd}>
                      <FormControlLabel
                        value={value}
                        // className={classes.category}
                        control={<Radio color="primary" />}
                        label={
                          <Typography className={classes.label} fontSize={12}>
                            {value === '2' || value === '4'
                              ? ''
                              : allDescriptions[value]}
                          </Typography>
                        }
                        labelPlacement="bottom"
                        key={value}
                        component={Radio}
                        className={classes.col}
                      />
                    </Grid>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        );
      })}
    </Paper>
  );
};

let mapStateToProps = (store) => ({
  meta: store.reviews.meta
});

export default connect(mapStateToProps)(Characteristics);

/**
 * 
 * oldcode
 * 
 * 
 * 
 * 
 * 
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

const Characteristics = ({ form, setForm, error, meta }) => {
  const classes = useStyles();
  const ratings = ['1', '2', '3', '4', '5'];
  console.log(`form`, form);

  const handleChange = (e) => {
    // e.preventDefault();
    setForm((prevState) => {
      // console.log(`1 before`);
      let id = meta.characteristics[e.target.name].id;
      // console.log(`1 after`);
      prevState.meta.characteristics[id] = Number(e.target.value);
      console.log(`prevState `, prevState);
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

      {Object.keys(meta.characteristics).map((character, index) => {
        console.log(`1. form`, form);
        const id = meta.characteristics[character].id;
        console.log(`2. id`, id);
        const allDescriptions = descriptions[character];

        console.log(`3. allDescriptions`, allDescriptions);
        const selectedVal = form.characteristics[id];
        console.log(`4. selectedVal`, selectedVal);
        const selectedDes = allDescriptions[selectedVal];
        console.log(`5. selectedDes`, selectedDes);

        return (
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            key={index}
          >
            <FormControl component="fieldset" key={character}>
              <FormLabel>
                {character}:{selectedDes}
              </FormLabel>
              <RadioGroup
                name={character}
                value={String(selectedVal) || ''}
                onChange={handleChange}
                row
                className={classes.group}
              >
                {ratings.map((value, innerInd) => {
                  return (
                    <Grid key={innerInd}>
                      <FormControlLabel
                        value={value}
                        // className={classes.category}
                        control={<Radio color="primary" />}
                        label={
                          <Typography className={classes.label} fontSize={12}>
                            {value === '2' || value === '4'
                              ? ''
                              : allDescriptions[value]}
                          </Typography>
                        }
                        labelPlacement="bottom"
                        key={value}
                        component={Radio}
                        className={classes.col}
                      />
                    </Grid>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        );
      })}
    </Paper>
  );
};

let mapStateToProps = (store) => ({
  meta: store.reviews.meta
});

export default connect(mapStateToProps)(Characteristics);

 * 
 * 
 * 
 */
