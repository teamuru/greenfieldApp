import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchReviewsSuccess = (reviews) => ({
  type: 'FETCH_REVIEWS_SUCCESS',
  payload: reviews
});

export const fetchReviewsFailure = (error) => ({
  type: 'FETCH_REVIEWS_FAILURE',
  payload: error
});

export const fetchReviews = (prodId) => {
  const url = `${API_URL}/reviews/${prodId}/list`;
  return (dispatch) =>
    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchReviewsSuccess(data));
      })
      .catch((err) => dispatch(fetchReviewsFailure(err)));
};

export const postReviewSucess = (review) => ({
  type: 'POST_REVIEW_SUCCESS',
  payload: review
});

export const postReviewFailure = (error) => ({
  type: 'POST_REVIEW_FAILURE',
  payload: error
});

export const postReview = (review, prodId) => {
  const url = `${API_URL}/reviews/${prodId}`;
  return (dispatch) =>
    Axios.post(url, review)
      .then(({ data }) => {
        dispatch(postReviewSucess(data));
      })
      .catch((err) => {
        dispatch(postReviewFailure(err));
      });
};

export const markReviewSuccess = (review) => ({
  type: 'PUT_REVIEW_SUCCESS',
  payload: review
});

export const markReviewFailure = (error) => ({
  type: 'PUT_REVIEW_FAILURE',
  payload: error
});

export const markReview = (prodId) => (dispatch) =>
  Axios.put(`${API_URL}/reviews/report/${prodId}`)
    .then(({ data }) => dispatch(markReviewSuccess(data)))
    .catch((err) => dispatch(markReviewFailure(err)));

export default fetchReviews;
