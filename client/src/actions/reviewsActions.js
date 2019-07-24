import Axios from 'axios';
import API_URL from '../lib/API_URL';

// GET REVIEWS
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

// GET META
export const fetchMetaSuccess = (meta) => ({
  type: 'FETCH_META_SUCCESS',
  payload: meta
});

export const fetchMetaFailure = (error) => ({
  type: 'FETCH_META_FAILURE',
  payload: error
});

export const fetchMeta = (prodId) => {
  const url = `${API_URL}/reviews/${prodId}/meta`;
  return (dispatch) =>
    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchMetaSuccess(data));
      })
      .catch((err) => dispatch(fetchMetaFailure(err)));
};

// Helpful
export const postHelpful = (prodId) => {
  const url = `${URL}/reviews/helpful/${prodId}`;
  Axios.put(url, { reveiw_id: prodId })
    .then((data) => {
      console.log(`reviews - sucessful put helpful`, data);
    })
    .catch((err) => {
      console.log(`reviews - fail put helpful`, err);
    });
};

// Report
export const reportReview = (prodId) => {
  const url = `${API_URL}/reviews/report/`;
  Axios.put(url, { answer_id: prodId })
    .then((data) => {
      console.log(`reviews - sucessful put report`, data);
    })
    .catch((err) => {
      console.log(`reviews - fail put report`, err);
    });
};

// Post from Form
export const postReviewSucess = (review) => ({
  type: 'POST_REVIEW_SUCCESS',
  payload: review
});

export const postReviewFailure = (error) => ({
  type: 'POST_REVIEW_FAILURE',
  payload: error
});

export const postReview = (reviewObj, prodId) => {
  const url = `${API_URL}/reviews/${prodId}`;
  return (dispatch) =>
    Axios.post(url, reviewObj)
      .then(({ data }) => {
        dispatch(postReviewSucess(data));
      })
      .catch((err) => {
        dispatch(postReviewFailure(err));
      });
};

// export const markReviewSuccess = (review) => ({
//   type: 'PUT_REVIEW_SUCCESS',
//   payload: review
// });

// export const markReviewFailure = (error) => ({
//   type: 'PUT_REVIEW_FAILURE',
//   payload: error
// });

// export const markReview = (prodId) => (dispatch) =>
//   Axios.put(`${API_URL}/reviews/report/${prodId}`)
//     // TODO: fix put request so that it gets thte helpfullness rating and increments it up
//     .then(({ data }) => dispatch(markReviewSuccess(data)))
//     .catch((err) => dispatch(markReviewFailure(err)));

export default { fetchReviews, postReview, fetchMeta };
