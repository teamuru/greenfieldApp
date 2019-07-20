import reducer from '../client/src/reducers/productReducer';
import fetchProductMock from '../mocks/fetchProductMock';

describe('Product reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { data: {}, styles: [], selectedStyle: -1 })).toEqual({ data: {}, styles: [], selectedStyle: -1 });
  });

  it('should handle FETCH_PRODUCT_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: fetchProductMock
      })
    ).toEqual({
      data: fetchProductMock
    });
  });

  it('Should handle FETCH_PRODUCT_FAILURE', () => {
    expect(
      reducer(
        {},
        {
          type: 'FETCH_PRODUCT_FAILURE'
        }
      )
    ).toEqual({});
  });
});
