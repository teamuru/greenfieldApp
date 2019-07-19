import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';

// class Slider extends

// const ComfortGraph = () => {
class ComfortGraph extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     min: 1,
  //     max: 100,
  //     step: 10,
  //     value: 1,
  //   };
  // onSliderChange = (value) => {
  //   log(value);
  //   this.setState({value});
  // }
  render() {
    return (
      <div>
        <span>
          {' '}
          Comfort Graph - Working on Slider
          <Slider
            dots
            step={1}
            defaultValue={5}
            // onAfterChange={5}
          />
        </span>
      </div>
    );
  }
}

export default ComfortGraph;
