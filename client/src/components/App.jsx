import React, { Component } from "react";

// const ProductComponent = () => {
//   <h1>Product Component Link </h1>;
// };

// const QuestionsComponent = () => {
//   <h1> Questions Component Link</h1>;
// };

// const RelatedComponent = () => {
//   <h1> Related Component Link</h1>;
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
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo">Greenfield Logo</div>
          </div>
        </nav>
        {/* <ProductComponent /> */}
        Test
      </div>
    );
  }
}

export default App;
