import React, { Component } from "react";

class MoreAnsweredQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMoreQuestions: 2
    };
    this.hangelLoadMoreQuestions = this.hangelLoadMoreQuestions.bind(this);
  }

  hangelLoadMoreQuestions() {
    let count = this.props.questions.length;
    this.props.setCount(count);
  }
  
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.hangelLoadMoreQuestions();
          }}
        >
          MORE ANSWERED QUESTIONS
        </button>
      </div>
    );
  }
}

export default MoreAnsweredQuestions;
