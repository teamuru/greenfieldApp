import {
 createStore, combineReducers, applyMiddleware, compose 
} from 'redux';
import ReduxThunk from 'redux-thunk';
import productReducer from './reducers/productReducer';

// TODO: Add other reducers to rootReducer
const rootReducer = combineReducers({
  product: productReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);
export default store;
