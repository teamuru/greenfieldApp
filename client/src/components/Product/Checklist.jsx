import React from 'react';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';

export default function Checklist(props) {
  const { features } = props;
  return (
    <React.Fragment>
      <Typography variant="body1">Features</Typography>
      {features.map(feature => (
        <div style={{ display: 'flex', alignItems: 'flex-end' }} key={feature.feature}>
          <Check />
          <Typography variant="body2">{feature.value}</Typography>
        </div>
      ))}
    </React.Fragment>
  );
}

Checklist.propTypes = {
  features: PropTypes.array.isRequired
};
