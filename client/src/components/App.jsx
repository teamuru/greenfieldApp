import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductComponent = () => <h5>Product Component Link </h5>;

const RelatedComponent = () => <h5> Related Component Link</h5>;

const QuestionsComponent = () => <h5> Questions Component Link</h5>;

const ReviewsComponent = () => <h5> Reviews Component Link</h5>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <div className="nav-wrapper">
                <div className="brand-logo">Greenfield Logo</div>
              </div>
            </nav>
            <ul>
              <li>
                <Link to="/"> link to Product </Link>
              </li>
              <li>
                <Link to="/related"> link to Related </Link>
              </li>
              <li>
                <Link to="/questions"> link to Questions </Link>
              </li>
              <li>
                <Link to="/reviews"> link to Reviews </Link>
              </li>
            </ul>

            <Route exact path="/" component={ProductComponent} />
            <Route exact path="/related" component={RelatedComponent} />
            <Route exact path="/questions" component={QuestionsComponent} />
            <Route exact path="/reviews" component={ReviewsComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
