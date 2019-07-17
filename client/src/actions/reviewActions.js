import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchReviewsSucess = (reviews) => ({
  type: 'FETCH_REVIEW_SUCESS',
  payload: reviews
});

export const fetchReviewFailure = (err) => ({
  type: 'FETCH_REVIEW_FAILURE',
  payload: err
});

export const fetchReviews = (productId) => {
  const url = `https://cors-anywhere.herokuapp.com/${API_URL}/reviews/${productId}/list`;
  return (dispatch) =>
    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchReviewsSucess(data));
      })
      .catch((err) => {
        dispatch(fetchReviewFailure(err));
      });
};
