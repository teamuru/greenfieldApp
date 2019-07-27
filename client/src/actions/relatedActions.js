import Axios from 'axios';
import API_URL from '../lib/API_URL';
import calculateAverageRate from '../lib/calculateAverageRate';
import store from '../store';

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

export const fetchPhotoSuccess = photo => ({
  type: 'FETCH_PHOTO_SUCCESS',
  payload: {
    photo
  }
});

export const clearPhotos = () => ({
  type: 'CLEAR_PHOTOS'
});

export const clearRelated = () => ({
  type: 'CLEAR_RELATED'
});

export const clearStars = () => ({
  type: 'CLEAR_STARS'
});

/* The fetchAllRelated action runs on page load and gets all of the information for all the related products. 
It is unavoidable to make all these requests because the data is stored at different endpoints.
Originally this was in multiple functions but it all   */

export const fetchAllRelated = (prodId) => {
  const related = [];
  const photos = [];
  const stars = [];

  return (dispatch) => {
    Axios.get(`${API_URL}/products/${prodId}/related`)
      .then(({ data }) => {
        dispatch(fetchRelatedSuccess(data));
        data.forEach((item) => {
          related.push(Axios.get(`${API_URL}/products/${item}`));
        });
      })
      .then(() => {
        Axios.all(related).then(
          Axios.spread((...args) => {
            args.forEach((item) => {
              dispatch(fetchRelatedProductSuccess(item.data));
            });
          })
        );
      })
      .then(() => {
        const IDs = store.getState().related.relatedIDs;

        IDs.forEach((id) => {
          photos.push(Axios.get(`${API_URL}/products/${id}/styles`));
        });
      })
      .then(() => {
        Axios.all(photos).then(
          Axios.spread((...args) => {
            args.forEach((item) => {
              dispatch(fetchPhotoSuccess(item.data));
            });
          })
        );
      })
      .then(() => {
        const IDs = store.getState().related.relatedIDs;

        IDs.forEach((item) => {
          stars.push(Axios.get(`${API_URL}/reviews/${item}/meta`));
        });
      })
      .then(() => {
        Axios.all(stars).then(
          Axios.spread((...args) => {
            args.forEach((item) => {
              dispatch(
                fetchStarsSuccess(calculateAverageRate(item.data.ratings))
              );
            });
          })
        );
      })
      .catch((error) => {
        dispatch(fetchRelatedProductFailure(error));
      });
  };
};

export const clearAllRelated = () => dispatch => dispatch(clearRelated());

export const clearAllPhotos = () => dispatch => dispatch(clearPhotos());

export const clearAllStars = () => dispatch => dispatch(clearStars());
