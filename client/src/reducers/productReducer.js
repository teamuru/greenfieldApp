const intialState = {
  data: {},
  styles: [],
  selectedStyle: {},
  selectedSku: '',
  selectedQty: 0
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_PRODUCT_FAILURE':
      return { ...state, productError: action.payload };
    case 'FETCH_STYLES_SUCCESS':
      return { ...state, styles: action.payload };
    case 'FETCH_STYLES_FAILURE':
      return { ...state, stylesError: action.payload };
    case 'CHANGE_SELECTED_STYLE':
      return { ...state, selectedStyle: action.payload };
    case 'CHANGE_SELECTED_SKU':
      return { ...state, selectedSku: action.payload };
    case 'CHANGE_SELECTED_QUANTITY':
      return { ...state, selectedQty: action.payload };
    default:
      return state;
  }
};

export default productReducer;
