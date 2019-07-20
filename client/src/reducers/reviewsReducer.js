const intialState = {};

const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_REVIEWS_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_REVIEWS_FAILURE':
      return state;
    case 'FETCH_META_SUCCESS':
      return { ...state, meta: action.payload };
    case 'FETCH_META_FAILURE':
      return state;
    case 'POST_REVIEWS_SUCCESS':
      return { ...state, data: action.payload };
    case 'POST_REVIEWS_FAILURE':
      return state;
    default:
      return state;
  }
};

export default reviewsReducer;
