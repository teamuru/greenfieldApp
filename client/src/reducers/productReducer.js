const intialState = {
  currentProduct: null,
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return { ...state, currentProduct: action.id };
    default:
      return state;
  }
};

export default productReducer;
