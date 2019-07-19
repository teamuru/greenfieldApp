import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {
  const { slogan, description } = props;
  return (
    <React.Fragment>
      <h6>{slogan}</h6>
      <p>{description}</p>
    </React.Fragment>
  );
}

Description.propTypes = {
  slogan: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
