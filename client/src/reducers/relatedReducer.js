const initialState = {};

const relatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RELATED_SUCCESS':
      return { ...state, related: action.payload };
    case 'GET_RELATED_FAILURE':
      return state;
    default:
      return state;
  }
};

export default relatedReducer;
