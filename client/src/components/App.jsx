import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const ProductComponent = () => {
  <h1>Product Component Link </h1>;
};

const RelatedComponent = () => {
  <h1> Related Component Link</h1>;
};
// const QuestionsComponent = () => {
//   <h1> Questions Component Link</h1>;
// };

// const ReviewsComponent = () => {
//   <h1> Reviews Component Link</h1>;
// };

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
            {/* <ProductComponent /> */}
            Test
            <Route path="/" component={ProductComponent} />
            <Route path="/related" component={RelatedComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
