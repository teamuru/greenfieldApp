import React, { Component } from "react";

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.hangelLoadMore = this.hangelLoadMore.bind(this);
  }

  hangelLoadMore() {
    console.log('click on load more')
  }
  render() {
    let answers = this.props.answers;
    return (
      <div>
        <button
          style={{fontWeight: "bold", fontSize: 8 }}
          onClick={() => {
            this.hangelLoadMore(answers);
          }}
        >
          Load More Answers
        </button>
      </div>
    );
  }
}

export default LoadMore;
