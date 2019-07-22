import React from 'react';
import PropTypes from 'prop-types';
import Attachment from '@material-ui/icons/Attachment';

const AddAttachment = (props) => {
  const { features } = props;
  return (
    <React.Fragment>
      {features.map((feature) => (
        <div
          style={{ display: 'flex', alignItems: 'flex-end' }}
          key={feature.feature}
        >
          <Attachment />
          {feature.value}
        </div>
      ))}
    </React.Fragment>
  );
};

AddAttachment.propTypes = {
  features: PropTypes.array.isRequired
};

export default AddAttachment;
