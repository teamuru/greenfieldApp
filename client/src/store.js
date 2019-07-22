import {
 createStore, combineReducers, applyMiddleware, compose 
} from 'redux';
import ReduxThunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import reviewsReducer from './reducers/reviewsReducer';
import questionsReducer from './reducers/questionsReducer';
import relatedReducer from './reducers/relatedReducer';

const rootReducer = combineReducers({
  product: productReducer,
  questions: questionsReducer,
  reviews: reviewsReducer,
  related: relatedReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);
export default store;
