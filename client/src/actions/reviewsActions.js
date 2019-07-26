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

export const fetchReviews = (productId, sort, count = 50) => async (
  dispatch
) => {
  const reviews = await Axios.get(`${API_URL}/reviews/${productId}/list`, {
    params: {
      sort,
      count
    }
  });

  dispatch({
    type: 'FETCH_REVIEWS_SUCCESS',
    payload: reviews.data
  });
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
export const putHelpful = (reviewId) => {
  const url = `${API_URL}/reviews/helpful/${reviewId}`;

  Axios.put(url, { reveiw_id: reviewId })
    .then(() => {
      console.log('sucessful put');
      // dispatch(fetchReviews(prodId));
    })
    .catch((err) => {
      console.log('reviews - fail put helpful \n err => ', err);
    });
};

// Report

export const reportReview = (reviewId) => {
  // const url = `${API_URL}/reviews/report/${reviewId}`;
  const url = `http://18.222.40.124/reviews/helpful/${reviewId}`;
  Axios.put(
    url
    // , { review_id: reviewId }
  )
    .then(() => {
      console.log('success put report answer ');
    })
    .catch(() => {
      console.log('fail put report answer ');
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
        dispatch(fetchReviews(prodId));
        dispatch(fetchMeta(prodId));
      })
      .catch((err) => {
        dispatch(postReviewFailure(err));
      });
};

export const sortReviews = (sort) => (dispatch, getState) => {
  const { productId } = getState();
  dispatch({
    type: 'REVIEWS_SORT',
    payload: sort
  });
  dispatch(fetchReviews(productId, sort));
};

// Setting Limit
export const setLimit = () => ({
  type: 'SET_REVIEWS_LIMIT',
  payload: 2
});

// showReviews

export const showReviews = (length) => ({
  type: 'REVIEWS_SHOW',
  payload: length
});

export default {
  fetchReviews,
  fetchMeta,
  putHelpful,
  reportReview,
  postReview,
  sortReviews,
  setLimit,
  showReviews
};
