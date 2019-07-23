import React, { Component } from "react";

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { moreOrLess: true };
    this.hangelLoadMore = this.hangelLoadMore.bind(this);
  }

  hangelLoadMore(e) {
    // e.preventDefault();
    // console.log("click on load more", this.state.loadMore);
    //TODO: change to less or more depend on onclick
    // let bool;
    let { moreOrLess } = this.state;
    moreOrLess
      ? this.setState({ loadMore: false })
      : this.setState({ loadMore: true });

    this.props.setLoadMore();
  }

  render() {
    // let answers = this.props.answers;
    let { moreOrLess } = this.state.props;
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
