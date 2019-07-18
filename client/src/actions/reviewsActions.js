import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchReviewsSuccess = reviews => ({
  type: 'FETCH_REVIEWS_SUCCESS',
  payload: reviews
});

export const fetchReviewsFailure = error => ({
  type: 'FETCH_REVIEWS_FAILURE',
  payload: error
});

export const fetchReviews = (prodId) => {
  const url = `${API_URL}/reviews/${prodId}/list`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchReviewsSuccess(data));
      })
      .catch(err => dispatch(fetchReviewsFailure(err)));
};

export default fetchReviews;
