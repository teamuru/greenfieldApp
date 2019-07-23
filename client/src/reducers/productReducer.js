const intialState = {
  data: {},
  styles: [],
  selectedStyle: {},
  selectedSku: '',
  selectedQty: 0,
  selectedPhoto: 0,
  rating: 0
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
    case 'FETCH_RATINGS_SUCCESS':
      return { ...state, rating: action.payload };
    case 'FETCH_RATINGS_FAILURE':
      return { ...state, ratingError: action.payload };
    case 'CHANGE_SELECTED_STYLE':
      return { ...state, selectedStyle: action.payload };
    case 'CHANGE_SELECTED_SKU':
      return { ...state, selectedSku: action.payload };
    case 'CHANGE_SELECTED_QUANTITY':
      return { ...state, selectedQty: action.payload };
    case 'RESET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: intialState.selectedPhoto };
    case 'CHANGE_SELECTED_PHOTO_UP': {
      return { ...state, selectedPhoto: state.selectedPhoto + 1 };
    }
    case 'CHANGE_SELECTED_PHOTO_DOWN': {
      return { ...state, selectedPhoto: state.selectedPhoto - 1 };
    }
    default:
      return state;
  }
};

export default productReducer;
