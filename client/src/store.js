import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import reviewsReducer from './reducers/reviewsReducer';
import questionsReducer from './reducers/questionsReducer';
import relatedReducer from './reducers/relatedReducer';
import sortReducer from './reducers/sortReducer';
// import revLimitReducer from './reducers/revLimitReducer';
import revLimitReducer from './reducers/setLimit';
import showReviewsReducer from './reducers/showReviews';

const rootReducer = combineReducers({
  product: productReducer,
  questions: questionsReducer,
  reviews: reviewsReducer,
  related: relatedReducer,
  reviewSort: sortReducer,
  revLimit: revLimitReducer,
  showReviews: showReviewsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);
export default store;
