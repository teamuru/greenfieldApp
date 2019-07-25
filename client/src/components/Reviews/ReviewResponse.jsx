import React from 'react';

function ReviewResponse({ review }) {
  return !review.response || review.response.length === 0 ? (
    <span>No responses yet...</span>
  ) : (
    <div>{review.response}</div>
  );
}

export default ReviewResponse;
