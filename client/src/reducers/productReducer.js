const intialState = {
  currentProduct: null
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT":
      return { ...state, currentProduct: action.id };
    default:
      return state;
  }
};
