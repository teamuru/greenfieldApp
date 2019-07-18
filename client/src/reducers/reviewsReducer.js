const intialState = {};

const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_REVIEWS_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_REVIEWS_FAILURE':
      return state;
    default:
      return state;
  }
};

export default reviewsReducer;
