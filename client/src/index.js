import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { store } from "./store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Router path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
