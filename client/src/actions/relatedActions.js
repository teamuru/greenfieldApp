import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchRelatedSuccess = related => ({
  type: 'FETCH_RELATED_SUCCESS',
  payload: related
});

export const fetchRelatedFailure = error => ({
  type: 'FETCH_RELATED_FAILURE',
  payload: error
});

export const fetchRelatedProductSuccess = product => ({
  type: 'FETCH_RELATED_PRODUCT_SUCCESS',
  payload: product
});

export const fetchRelatedProductFailure = error => ({
  type: 'FETCH_RELATED_PRODUCT_FAILURE',
  payload: error
});

export const fetchRelatedIDs = (prodId) => {
  const url = `${API_URL}/products/${prodId}/related`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchRelatedSuccess(data));
      })
      .catch(error => dispatch(fetchRelatedFailure(error)));
};

export const fetchRelatedProduct = (prodId) => {
  const url = `${API_URL}/product/${prodId}`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchRelatedProductSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchRelatedProductFailure(error));
      });
};
