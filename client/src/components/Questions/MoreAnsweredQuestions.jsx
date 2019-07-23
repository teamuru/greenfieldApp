import React, { Component } from "react";

class MoreAnsweredQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 2, hover: "normal" };
    this.hangelClick = this.hangelClick.bind(this);
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  handleHoverOn() {
    this.setState({ hover: "bold" });
  }
  handleHoverOff() {
    this.setState({ hover: "normal" });
  }

  hangelClick() {
    let count = this.props.questions.length;
    let load = this.props.load;
    load ? this.props.setCount(2) : this.props.setCount(count);
    this.props.setLoadMore();
  }

  render() {
    return (
      <span>
        <button
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
          style={{ fontWeight: this.state.hover, fontSize: 14 }}
          onClick={this.hangelClick}
        >
          MORE ANSWERED QUESTIONS
        </button>
        <span style={{ whiteSpace: "pre-wrap" }}>{`   `}</span>
      </span>
    );
  }
}

export default MoreAnsweredQuestions;
