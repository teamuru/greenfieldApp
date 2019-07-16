import reducer from "../../client/src/reducers/productReducer";
// TODO: import in actions
// from example:
// import * as types from '../../constants/ActionTypes'

describe("product reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      {
        currentProduct: null
      }
    ]);
  });
});
