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
        <nav>
          <div className='nav-wrapper'>
            <div className='brand-logo'>Greenfield Logo</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
