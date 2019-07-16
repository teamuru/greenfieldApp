import { createStore, combineReducers } from "redux";

import { productReducer } from "./reducers/productReducer";

// TODO: Add other reducers to rootReducer
const rootReducer = combineReducers({
  product: productReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
