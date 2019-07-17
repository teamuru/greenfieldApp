import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchProduct } from '../client/src/actions/productActions';
import fetchProductMock from '../mocks/fetchProductMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Action creator tests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_PRODUCT_SUCCESS after successfuly fetching product', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchProductMock
      });
    });

    const expectedActions = [
      { type: 'FETCH_PRODUCT_SUCCESS', payload: fetchProductMock }
    ];

    const store = mockStore({});

    return store.dispatch(fetchProduct()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
