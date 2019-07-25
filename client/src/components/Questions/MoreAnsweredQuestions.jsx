import React, { Component } from "react";

class MoreAnsweredQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "bold",
      moreOrLess: true
    };
    this.hangelClick = this.hangelClick.bind(this);
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  handleHoverOn() {
    this.setState({ hover: "normal" });
  }
  handleHoverOff() {
    this.setState({ hover: "bold" });
  }

  hangelClick() {
    let count = this.props.questions.length;
    let { load, countQuestion, setLoadMore, setCount } = this.props;
    let temp;
    let tempCount;
    let { moreOrLess } = this.state;
    // console.log("more answer question ", moreOrLess);
    tempCount = moreOrLess
      ? count > countQuestion + 2
        ? countQuestion + 2
        : count
      : 2;
    // 5      2 + 2
    tempCount >= count ? (temp = false) : (temp = true);
    // console.log("more answer countQuestion ", countQuestion);

    setLoadMore();
    setCount(tempCount);
    this.setState({ moreOrLess: temp });
  }

  render() {
    return (
      <span>
        <button
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
          style={{
            fontWeight: this.state.hover,
            fontSize: 24,
            cursor: "pointer",
            padding: "20px"
          }}
          onClick={this.hangelClick}
        >
          {this.state.moreOrLess
            ? "MORE ANSWERED QUESTIONS"
            : "LESS ANSWERED QUESTIONS"}
        </button>
        <span style={{ whiteSpace: "pre-wrap" }}>{`       `}</span>
      </span>
    );
  }
}

export default MoreAnsweredQuestions;
