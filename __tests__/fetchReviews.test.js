import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { fetchReviews } from '../client/src/actions/reviewActions';
import fetchReviewsMock from '../mocks/fetchReviewsMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Action creator tests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_REVIEWS_SUCCESS after successfuly fetching reviews', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchReviewsMock
      });
    });

    const expectedActions = [
      { type: 'FETCH_REVIEWS_SUCCESS', payload: fetchReviewsMock }
    ];

    const store = mockStore({});

    return store.dispatch(fetchReviews()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
