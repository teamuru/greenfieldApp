const showReviewsReducer = (state = 2, { type, payload }) => {
  switch (type) {
    case 'REVIEWS_SHOW':
      return payload;
    default:
      return state;
  }
};

export default showReviewsReducer;
