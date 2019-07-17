import {
 createStore, combineReducers, applyMiddleware, compose 
} from 'redux';
import ReduxThunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import reviewReducer from './reducers/reviewReducer';
import questionsReducer from './reducers/questionsReducer';

// TODO: Add other reducers to rootReducer
const rootReducer = combineReducers({
  product: productReducer,
  questions: questionsReducer,
  reviews: reviewReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(ReduxThunk)));
export default store;
