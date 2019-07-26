import reducer from '../client/src/reducers/productReducer';
import fetchProductMock from '../mocks/fetchProductMock';

describe('Product reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {
        data: {},
        styles: [],
        selectedStyle: {},
        selectedStyleIndex: 0,
        selectedSku: '',
        selectedQty: '',
        rating: 0,
        selectedPhoto: 0,
        expandedView: false,
        zoomed: false
      })
    ).toEqual({
      data: {},
      styles: [],
      selectedStyle: {},
      selectedStyleIndex: 0,
      selectedSku: '',
      selectedQty: '',
      rating: 0,
      selectedPhoto: 0,
      expandedView: false,
      zoomed: false
    });
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
