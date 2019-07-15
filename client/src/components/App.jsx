import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      array: []
    };
  }
  componentDidMount() {
    //
  }
  render() {
    return (
      <div>
        <h1 className='jumbotron'> MERN Stack Boilerplate </h1>
      </div>
    );
  }
}

export default App;
