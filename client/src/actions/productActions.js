import Axios from 'axios';
import API_URL from '../lib/API_URL';
import calculateAverageRating from '../lib/calculateAverageRating';

// Fetch Product Data
export const fetchProductSuccess = product => ({
  type: 'FETCH_PRODUCT_SUCCESS',
  payload: product
});

export const fetchProductFailure = error => ({
  type: 'FETCH_PRODUCT_FAILURE',
  payload: error
});

export const fetchProduct = (prodId) => {
  const url = `${API_URL}/products/${prodId}`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchProductSuccess(data));
      })
      .catch(err => dispatch(fetchProductFailure(err)));
};

// Change Selected Style
export const changeSelectedStyle = selectedStyle => ({ type: 'CHANGE_SELECTED_STYLE', payload: selectedStyle });

// Change Selected Sku
export const changeSelectedSku = sku => ({ type: 'CHANGE_SELECTED_SKU', payload: sku });

// Change Selected Quantity
export const changeSelectedQty = qty => ({ type: 'CHANGE_SELECTED_QUANTITY', payload: qty });

// Change Selected PHOTO
export const resetSelectedPhoto = () => ({ type: 'RESET_SELECTED_PHOTO' });

export const changeSelectedPhotoUp = () => ({ type: 'CHANGE_SELECTED_PHOTO_UP' });

export const changeSelectedPhotoDown = () => ({ type: 'CHANGE_SELECTED_PHOTO_DOWN' });

export const changeSelectedPhotoIndex = index => ({ type: 'CHANGE_SELECTED_PHOTO_INDEX', payload: index });

// Change Expanded View
export const changeExpandedView = () => ({ type: 'CHANGE_EXPANDED_VIEW' });

// Fetch Styles
export const fetchStylesSuccess = styles => ({
  type: 'FETCH_STYLES_SUCCESS',
  payload: styles
});

export const fetchStylesFailure = error => ({
  type: 'FETCH_STYLES_FAILURE',
  payload: error
});

export const fetchStyles = (prodId) => {
  const url = `${API_URL}/products/${prodId}/styles`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        const { results } = data;
        dispatch(fetchStylesSuccess(results));
        for (let i = 0; i < results.length; i += 1) {
          if (results[i]['default?']) {
            dispatch(changeSelectedStyle(results[i]));
            break;
          } else if (i === results.length - 1) {
            dispatch(changeSelectedStyle(results[0]));
          }
        }
      })
      .catch((err) => {
        dispatch(fetchStylesFailure(err));
      });
};
// Fetch Ratings
export const fetchRatingsSuccess = ratings => ({
  type: 'FETCH_RATINGS_SUCCESS',
  payload: ratings
});

export const fetchRatingsFailure = error => ({
  type: 'FETCH_RATINGS_FAILURE',
  payload: error
});

export const fetchRatings = (prodId) => {
  const url = `${API_URL}/reviews/${prodId}/meta`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        const { ratings } = data;
        const stars = calculateAverageRating(ratings);
        dispatch(fetchRatingsSuccess(stars));
      })
      .catch((err) => {
        dispatch(fetchRatingsFailure(err));
      });
};
