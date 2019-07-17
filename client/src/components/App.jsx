import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Child = ({ match }) => (
  <div>
    <h5>
      {" "}
      Render Product with id:
      {match.params.id}
    </h5>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // FIXME: getProductIds from the store
      productIds: [1, 2, 3, 4, 5]
    };
  }

  componentDidMount() {}

  render() {
    const { productIds } = this.state;
    return (
      <div className="container">
        <Router>
          <div>
            <nav>
              <div className="nav-wrapper">
                <div className="left brand-logo">Greenfield Logo</div>
                <ul className="right">
                  <li>
                    {/* TODO: fix "/" once products are loaded */}
                    <a href="/"> Products </a>
                  </li>
                </ul>
              </div>
            </nav>
            <ul>
              {productIds.map(product => (
                <li key={product}>
                  <Link to={`/${product}`}>
                    {" "}
                    Product
                    {product}{" "}
                  </Link>
                </li>
              ))}
            </ul>

            <Route path="/:id" component={Child} />
          </div>
        </Router>
      </div>
    );
  }
}

Child.propTypes = {
  match: PropTypes.string.isRequired
};

export default App;
