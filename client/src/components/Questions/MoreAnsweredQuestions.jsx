import React, { Component } from "react";

class MoreAnsweredQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 2 };
    this.hangelClick = this.hangelClick.bind(this);
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
          style={{ fontWeight: "bold", fontSize: 14 }}
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
