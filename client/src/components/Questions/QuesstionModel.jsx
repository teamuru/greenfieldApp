import React, { Component } from "react";
import AnswerModal from "./AnswerModal";
import AddAnswer from "./AddAnswer";

class AddQuestionModal extends Component {
  render() {
    let { questions, count } = this.props;
    // console.log("question ", questions);

    if (questions) {
      questions = questionModal(questions, count);
      return (
        <div>
          {questions.map(question => {
            let {
              question_body,
              question_id,
              question_helpfulness,
              answers
            } = question;

            return (
              <div key={`questionID:${question_id}`}>
                <label style={{ fontWeight: "bold", fontSize: 12 }}>
                  Q: {question_body}
                </label>
                <label style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
                  {`     Helpful?    `}
                </label>
                <label style={{ textDecorationLine: "underline", fontSize: 8 }}>
                  Yes
                </label>
                <label style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
                  {`(${question_helpfulness})     |     `}
                </label>
                <AddAnswer questionId={question["question_id"]} />
                <br />
                <AnswerModal answers={answers} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const questionModal = (questions, count) => {
  let newQues = [];
  for (let i = 0; i < count; i++) {
    if (questions[i]) {
      newQues.push(questions[i]);
    }
  }
  return newQues;
};

export default AddQuestionModal;
