import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';

import App from './components/App.jsx';

ReactDOM.render(
  // <Provider>
  <App />, // TODO: fix this
  // </Provider>,
  document.getElementById('app')
);
