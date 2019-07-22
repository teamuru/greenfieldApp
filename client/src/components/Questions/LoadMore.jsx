import React, { Component } from "react";

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { moreOrLess: "More", loadMore: false };
    this.hangelLoadMore = this.hangelLoadMore.bind(this);
  }

  hangelLoadMore(e) {
    // e.preventDefault();
    // console.log("click on load more", this.state.loadMore);
    //TODO: change to less or more depend on onclick
    // this.state.loadMore
    //   ? this.setState({ moreOrLess: "More", loadMore: false })
    //   : this.setState({ moreOrLess: "Less", loadMore: true });

    this.props.setLoadMore();
  }

  render() {
    // let answers = this.props.answers;
    return (
      <div>
        <button
          style={{ border: "none", fontWeight: "bold", fontSize: 8 }}
          onClick={this.hangelLoadMore}
        >
          See {this.state.moreOrLess} Answers
        </button>
      </div>
    );
  }
}

export default LoadMore;
