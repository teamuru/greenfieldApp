import reducer from '../client/src/reducers/productReducer';
import fetchReviewsMock from '../mocks/fetchReviewsMock';

describe('Reviews reducer ', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_REVIEWS_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'FETCH_REVIEWS_SUCCESS',
        payload: fetchReviewsMock
      })
    ).toEqual({
      data: fetchReviewsMock
    });
  });

  it('Should handle FETCH_REVIEWS_FAILURE', () => {
    expect(
      reducer(
        {},
        {
          type: 'FETCH_REVIEWS_FAILURE'
        }
      )
    ).toEqual({});
  });
});
