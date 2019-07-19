const intialState = {};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_PRODUCT_FAILURE':
      return { ...state, productError: action.payload };
    case 'FETCH_STYLES_SUCCESS':
      return { ...state, styles: action.payload.results };
    case 'FETCH_STYLES_FAILURE':
      return { ...state, stylesError: action.payload };
    default:
      return state;
  }
};

export default productReducer;
