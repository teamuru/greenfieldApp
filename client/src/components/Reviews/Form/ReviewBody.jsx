import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const ReviewBody = ({ body, handleChange, error }) => {
  const minReqChars = () => {
    let remainingChars = 50 - body.length;
    return remainingChars > 0
      ? `The response needs ${remainingChars} more characters`
      : 'Able to submit';
  };

  return (
    <Box>
      <h4>Review Body*</h4>
      <TextField
        inputProps={{ maxLength: 1000 }}
        multiline
        onChange={handleChange}
        placeholder="tell us why you loved this product"
        required={true}
        value={body}
        name="body"
        error={error}
      />
      <Box>{minReqChars()}</Box>
    </Box>
  );
};

export default ReviewBody;
