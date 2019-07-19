/* eslint consistent-return: "off" */
const initialState = {
  relatedProducts: [],
  relatedIDs: [],
  stars: [],
  outfit: [],
  photos: []
};

const relatedReducer = (state = initialState, action) => {
  let outfitItem;
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
    case 'FETCH_STARS_SUCCESS':
      return {
        ...state,
        stars: [...state.stars, action.payload]
      };
    case 'FETCH_STARS_FAILURE':
      return state;
    case 'ADD_TO_OUTFIT':
      state.relatedProducts.forEach((item) => {
        if (item.id === action.payload.id) {
          outfitItem = item;
        }
      });

      if (outfitItem) {
        return {
          ...state,
          outfit: [...state.outfit, outfitItem]
        };
      }

      return state;
    case 'DELETE_FROM_OUTFIT':
      return state.relatedProducts.filter(
        product => product.id !== action.payload.id
      );
    case 'FETCH_PHOTO_SUCCESS':
      return {
        ...state,
        photos: [...state.photos, action.payload]
      };

    default:
      return state;
  }
};

export default relatedReducer;
