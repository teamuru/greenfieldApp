import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// Modularized this component initially for styling purposes
class MoreReviews extends Component {
  render() {
    return (
      <Button
        variant="outlined"
        style={{ padding: '10px', margin: '10px', fontSize: 20 }}
      >
        MORE REVIEWS
      </Button>
    );
  }
}

export default MoreReviews;
