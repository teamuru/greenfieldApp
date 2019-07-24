import React, { Component } from "react";

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { moreOrLess: true, hover: "none" };
    this.hangelLoadMore = this.hangelLoadMore.bind(this);
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  hangelLoadMore(e) {
    let { moreOrLess } = this.state;
    moreOrLess
      ? this.setState({ moreOrLess: false })
      : this.setState({ moreOrLess: true });
    this.props.setLoadMore();
  }
  handleHoverOn() {
    this.setState({ hover: "underline" });
  }
  handleHoverOff() {
    this.setState({ hover: "none" });
  }

  render() {
    // let answers = this.props.answers;
    let { moreOrLess, hover } = this.state;
    let { aFontSize } = this.props;
    let { handleHoverOff, handleHoverOn } = this;
    return (
      <div>
        <button
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          style={{
            textDecorationLine: hover,
            border: "none",
            fontWeight: "bold",
            fontSize: aFontSize,
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
