import React from 'react';
import PropTypes from 'prop-types';

export default function Carousel(props) {
  const { img } = props;
  return (
    <React.Fragment>
      <img src={img} alt="product" />
    </React.Fragment>
  );
}

Carousel.propTypes = {
  img: PropTypes.string.isRequired
};
