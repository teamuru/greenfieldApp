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

export const fetchStarsSuccess = stars => ({
  type: 'FETCH_STARS_SUCCESS',
  payload: stars
});

export const fetchStarsFailure = error => ({
  type: 'FETCH_STARS_FAILURE',
  payload: error
});

export const addProductToOutfit = id => ({
  type: 'ADD_TO_OUTFIT',
  payload: {
    id
  }
});

export const fetchAllRelatedProducts = id => ({
  type: 'FETCH_ALL_RELATED',
  payload: {
    id
  }
});

export const deleteProductFromOutfit = id => ({
  type: 'DELETE_FROM_OUTFIT',
  payload: {
    id
  }
});

export async function fetchRelatedIDs(prodId) {
  const url = `${API_URL}/products/${prodId}/related`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchRelatedSuccess(data));
      })
      .catch(error => dispatch(fetchRelatedFailure(error)));
}

export const fetchRelatedProduct = (prodId) => {
  const url = `${API_URL}/products/${prodId}`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        console.log(data);
        dispatch(fetchRelatedProductSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchRelatedProductFailure(error));
      });
};

export const fetchStars = (prodId) => {
  const url = `${API_URL}/reviews/${prodId}/meta`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchStarsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchStarsFailure(error));
      });
};

export const fetchAllRelated = (prodId) => {
  const promises = [];

  return (dispatch) => {
    Axios.get(`${API_URL}/products/${prodId}/related`)
      .then(({ data }) => {
        data.forEach((item) => {
          promises.push(Axios.get(`${API_URL}/products/${item}`));
        });
      })
      .then(() => {
        Axios.all(promises).then(
          Axios.spread((...args) => {
            args.forEach((item) => {
              dispatch(fetchRelatedProductSuccess(item.data));
            });
          })
        );
      });
  };
};

// This cannot run until relatedProducts dispatches success
export const addToOutfit = prodId => addProductToOutfit(prodId);

export const deleteFromOutfit = prodId => deleteProductFromOutfit(prodId);
