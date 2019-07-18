import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const getRelatedSuccess = related => ({
  type: 'GET_RELATED_SUCCESS',
  payload: related
});

export const getRelatedFailure = error => ({
  type: 'GET_RELATED_FAILURE',
  payload: error
});

export const getRelatedIDs = (prodId) => {
  const url = `${API_URL}/${prodId}/related`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(getRelatedSuccess(data));
      })
      .catch(error => dispatch(getRelatedFailure(error)));
};
