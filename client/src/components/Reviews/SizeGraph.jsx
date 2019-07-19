import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); 
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

class SizeGraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  onSliderChange(value){
    log(value);
    this.setState({
      value
    });
  };
  onAfterChange(value){
    console.log(value); 
  };
  render() {
    return (
      <div>
      Size Graph
      <Slider dots step={20} defaultValue={100} onAfterChange={log}  />
{/* <Slider dots step={20} defaultValue={100} onAfterChange={log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} /> */}
      </div>
    );
  }
}

export default SizeGraphs;
