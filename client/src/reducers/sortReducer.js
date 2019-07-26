const sortReducer = (state = 'relevant', { type, payload }) => {
  switch (type) {
    case 'REVIEWS_SORT':
      return payload;
    default:
      return state;
  }
};

export default sortReducer;
