import React, { Component } from "react";

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { moreOrLess: true };
    this.hangelLoadMore = this.hangelLoadMore.bind(this);
  }

  hangelLoadMore(e) {
    let { moreOrLess } = this.state;
    moreOrLess
      ? this.setState({ moreOrLess: false })
      : this.setState({ moreOrLess: true });
    this.props.setLoadMore();
  }

  render() {
    // let answers = this.props.answers;
    let { moreOrLess } = this.state;
    return (
      <div>
        <button
          style={{
            border: "none",
            fontWeight: "bold",
            fontSize: 8,
            cursor: "pointer"
          }}
          onClick={this.hangelLoadMore}
        >
          {moreOrLess ? "See More Answers" : "See Less Answers"}
        </button>
      </div>
    );
  }
}

export default LoadMore;
