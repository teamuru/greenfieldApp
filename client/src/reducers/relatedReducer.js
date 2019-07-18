const initialState = {};

const relatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_SUCCESS':
      return { ...state, related: action.payload };
    case 'FETCH_RELATED_FAILURE':
      return state;
    default:
      return state;
  }
};

export default relatedReducer;
