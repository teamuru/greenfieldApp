const initialState = {
  relatedProducts: [],
  relatedIDs: []
};

const relatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_SUCCESS':
      return { ...state, relatedIDs: action.payload };
    case 'FETCH_RELATED_FAILURE':
      return state;
    case 'FETCH_RELATED_PRODUCT_SUCCESS':
      return {
        ...state,
        relatedProducts: [...state.relatedProducts, action.payload]
      };

    case 'FETCH_RELATED_PRODUCT_FAILURE':
      return state;
    default:
      return state;
  }
};

export default relatedReducer;
