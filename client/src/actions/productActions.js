import Axios from 'axios';
import API_URL from '../lib/API_URL';

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
        let i = 0;
        for (i; i < results.length; i += 1) {
          if (results[i]['default?']) {
            break;
          }
        }
        dispatch(changeSelectedStyle(results[i]));
        dispatch(fetchStylesSuccess(data));
      })
      .catch(err => dispatch(fetchStylesFailure(err)));
};
