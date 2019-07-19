import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPhoto: 0 };
  }

  render() {
    const { selectedPhoto } = this.state;
    const { styles, selectedStyle } = this.props;
    return (
      <React.Fragment>
        <img src={styles[selectedStyle].photos[selectedPhoto].url} alt="product" />
      </React.Fragment>
    );
  }
}

Carousel.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.number.isRequired
};
