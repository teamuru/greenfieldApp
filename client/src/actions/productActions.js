import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchProductBegin = () => ({
  type: 'FETCH_PRODUCT_BEGIN'
});

export const fetchProductSuccess = product => ({
  type: 'FETCH_PRODUCT_SUCCESS',
  payload: product
});

export const fetchProductFailure = error => ({
  type: 'FETCH_PRODUCT_FAILURE',
  payload: error
});

export const fetchProduct = (prodId) => {
  const url = `https://cors-anywhere.herokuapp.com/${API_URL}/Products/${prodId}`;
  return (dispatch) => {
    dispatch(fetchProductBegin());

    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchProductSuccess(data));
      })
      .catch(error => dispatch(fetchProductFailure(error)));
  };
};
