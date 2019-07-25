import React from 'react';
import { connect } from 'react-redux';
import { Grid, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import reviewsActions from '../../actions/reviewsActions';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 12
  },
  category: {
    marginBottom: theme.spacing(1)
  }
}));

const style = {
  ft: {
    fontSize: 10,
    color: '#A9A9A9'
  },
  head: {
    fontSize: 15
  }
};

const SizeGraph = (props) => {
  const { meta } = props.reviews;
  const classes = useStyles();

  const renderCat = (category) => {
    if (category === 'Fit' || category === 'Length') {
      return (
        <label htmlFor="tickmarks">
          <Grid container direction="row" justify="space-between">
            <option style={style.ft} label="Too small" />
            <option style={style.ft} label="Perfect" />
            <option style={style.ft} label="Too large" />
          </Grid>
        </label>
      );
    }
    return (
      <label htmlFor="tickmarks">
        <Grid container direction="row" justify="space-between">
          <option style={style.ft} label="Poor" />
          <option style={style.ft} label="Perfect" />
        </Grid>
      </label>
    );
  };

  return meta ? (
    <Grid style={style.head}>
      {Object.keys(meta.characteristics).map((category, index) => {
        let number = Number(meta.characteristics[category]) * 10;

        return (
          <div key={index}>
            <Box key={category} style={style.head} className={classes.category}>
              <span style={style.head}>{category}</span>

              <div className="slidecontainer">
                <input
                  type="range"
                  min="0"
                  max="50"
                  width="100%"
                  readOnly
                  // add some css slider later on
                  // className="slider"
                  list="tickmarks"
                  value={number}
                  style={style.ft}
                  className="slider"
                />
                {renderCat(category)}
              </div>
            </Box>
          </div>
        );
      })}
    </Grid>
  ) : (
    <div>Loading...</div>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(SizeGraph);

// export default SizeGraph;

// import React, { Component } from 'react';
// import Slider, { createSliderWithTooltip } from 'rc-slider';

// const style = { width: 600, margin: 50 };

// function log(value) {
//   console.log(value);
// }

// const SliderWithTooltip = createSliderWithTooltip(Slider);

// class SizeGraphs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null
//     };
//   }
//   onSliderChange(value){
//     log(value);
//     this.setState({
//       value
//     });
//   };
//   onAfterChange(value){
//     console.log(value);
//   };
//   render() {
//     return (
//       <div>
//       Size Graph
//       <Slider dots step={20} defaultValue={100} onAfterChange={log}  />
// {/* <Slider dots step={20} defaultValue={100} onAfterChange={log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} /> */}
//       </div>
//     );
//   }
// }

// export default SizeGraphs;
