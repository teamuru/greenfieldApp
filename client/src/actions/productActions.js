import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchProductSuccess = product => ({
  type: 'FETCH_PRODUCT_SUCCESS',
  payload: product
});

export const fetchProductFailure = error => ({
  type: 'FETCH_PRODUCT_FAILURE',
  payload: error
});

export const fetchProduct = (prodId) => {
  const url = `${API_URL}/Products/${prodId}`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchProductSuccess(data));
      })
      .catch(err => dispatch(fetchProductFailure(err)));
};

export default fetchProduct;
