const initialState = {
  data: {},
  styles: [],
  selectedStyle: {},
  selectedStyleIndex: 0,
  selectedSku: '',
  selectedQty: '',
  selectedPhoto: 0,
  rating: 0,
  expandedView: false,
  zoomed: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_STORE':
      return initialState;
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
    case 'CHANGE_SELECTED_STYLE_INDEX':
      return { ...state, selectedStyleIndex: action.payload };
    case 'CHANGE_SELECTED_SKU':
      return { ...state, selectedSku: action.payload };
    case 'CHANGE_SELECTED_QUANTITY':
      return { ...state, selectedQty: action.payload };
    case 'RESET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: initialState.selectedPhoto };
    case 'CHANGE_SELECTED_PHOTO_UP': {
      return { ...state, selectedPhoto: state.selectedPhoto + 1 };
    }
    case 'CHANGE_SELECTED_PHOTO_DOWN': {
      return { ...state, selectedPhoto: state.selectedPhoto - 1 };
    }
    case 'CHANGE_SELECTED_PHOTO_INDEX':
      return { ...state, selectedPhoto: action.payload };
    case 'CHANGE_EXPANDED_VIEW':
      return { ...state, expandedView: !state.expandedView };
    case 'CHANGE_ZOOMED':
      return { ...state, zoomed: !state.zoomed };
    default:
      return state;
  }
};

export default productReducer;
