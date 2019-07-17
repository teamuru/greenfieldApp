import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { store } from "./store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    {/* <Router>
      <Route path="/" component={App} />
    </Router> */}
    <App />,
  </Provider>,
  document.getElementById("app")
);
