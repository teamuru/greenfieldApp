const intialState = {};

const reviewReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_REVIEW_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_REVIEW_FAILURE':
      return state;
    default:
      return state;
  }
};

export default reviewReducer;
