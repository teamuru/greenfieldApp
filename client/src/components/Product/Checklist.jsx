import React from 'react';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';

export default function Checklist(props) {
  const { features } = props;
  return (
    <React.Fragment>
      <h6>Features</h6>
      {features.map(feature => (
        <div style={{ display: 'flex', alignItems: 'flex-end' }} key={feature.feature}>
          <Check />
          {feature.value}
        </div>
      ))}
    </React.Fragment>
  );
}

Checklist.propTypes = {
  features: PropTypes.array.isRequired
};
