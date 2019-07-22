import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Description(props) {
  const { slogan, description } = props;
  return (
    <React.Fragment>
      <Typography variant="h6">{slogan}</Typography>
      <Typography variant="body2">{description}</Typography>
    </React.Fragment>
  );
}

Description.propTypes = {
  slogan: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
