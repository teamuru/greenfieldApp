const revLimitReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_REVIEWS_SUCCESS':
      return payload;
    default:
      return state;
  }
};
export default revLimitReducer;
