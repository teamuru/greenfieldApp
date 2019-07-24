import React, { Component } from "react";

class MoreAnsweredQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
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
    let load = this.props.load;
    let temp;
    let { moreOrLess } = this.state;
    load ? this.props.setCount(2) : this.props.setCount(count);
    this.props.setLoadMore();

    moreOrLess ? (temp = false) : (temp = true);
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
        <span style={{ whiteSpace: "pre-wrap" }}>{`   `}</span>
      </span>
    );
  }
}

export default MoreAnsweredQuestions;
