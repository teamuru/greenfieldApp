const intialState = {
  product: {}
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_BEGIN':
      return { ...state, currentProductLoading: true };
    case 'FETCH_PRODUCT_SUCCESS':
      return { product: action.payload };
    case 'FETCH_PRODUCT_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
