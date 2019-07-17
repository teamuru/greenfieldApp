import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const FETCH_PRODUCT_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCT_BEGIN,
});

export const fetchProductsSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: { error },
});

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsBegin());
  return Axios.get(`https://cors-anywhere.herokuapp.com/${API_URL}/products/1`)
    .then((json) => {
      console.log(json.data);
      dispatch(fetchProductsSuccess(json.data));
      return json;
    })
    .catch(error => dispatch(fetchProductsFailure(error)));
};
