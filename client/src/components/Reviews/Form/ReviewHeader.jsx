import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const RevSummary = ({ summary = '', handleChange, error }) => {
  return (
    <Box>
      <h4>Review Summary*</h4>
      <TextField
        placeholder="i.e. What an amazing onesie!"
        value={summary}
        onChange={handleChange}
        inputProps={{ maxLength: 60 }}
        name="summary"
        error={error}
      />
    </Box>
  );
};

export default RevSummary;
