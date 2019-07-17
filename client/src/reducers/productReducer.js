const intialState = {};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_BEGIN':
      return { ...state, currentProductLoading: true };
    case 'FETCH_PRODUCT_SUCCESS':
      return { ...state, currentProductLoading: false, data: action.payload };
    case 'FETCH_PRODUCT_FAILURE':
      return state;
    default:
      return state;
  }
};

export default productReducer;
