import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchReviewsSuccess = (reviews) => ({
  type: 'FETCH_REVIEWS_SUCCESS',
  payload: reviews
});

export const fetchReviewFailure = (err) => ({
  type: 'FETCH_REVIEWS_FAILURE',
  payload: err
});

export const fetchReviews = (productId) => {
  const url = `${API_URL}/reviews/${productId}/list`;
  return (dispatch) =>
    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchReviewsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchReviewFailure(err));
      });
};
