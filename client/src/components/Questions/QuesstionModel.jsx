import React, { Component } from "react";
import AnswerModal from "./AnswerModal";
import AddAnswer from "./AddAnswer";
import Helpful from "./Helpful";

class AddQuestionModal extends Component {
  render() {
    let { questions, count, qFontSize, subFontSize, aFontSize } = this.props;
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
                <label style={{ fontWeight: "bold", fontSize: qFontSize }}>
                  Q: {question_body}
                </label>
                <Helpful
                  questionId={question_id}
                  helpfulness={question_helpfulness}
                  subFontSize={subFontSize}
                />
                <AddAnswer questionId={question_id} subFontSize={subFontSize} />
                <br />
                <AnswerModal
                  answers={answers}
                  subFontSize={subFontSize}
                  aFontSize={aFontSize}
                  qFontSize={qFontSize}
                />
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
