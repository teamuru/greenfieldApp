import React, { Component } from "react";
import AnswerModal from "./AnswerModal";
import AddAnswer from "./AddAnswer";
import Helpful from "./Helpful";
import Grid from "@material-ui/core/Grid";
import Highlighter from "react-highlight-words";

class AddQuestionModal extends Component {
  render() {
    let {
      questions,
      count,
      qFontSize,
      subFontSize,
      aFontSize,
      highLight
    } = this.props;
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
              <Grid key={`questionID:${question_id}`} container spacing={1}>
                <Grid item xs={8}>
                  <label
                    style={{
                      whiteSpace: "pre-wrap",
                      fontWeight: "bold",
                      fontSize: qFontSize
                    }}
                  >
                    Q:{` `}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[highLight]}
                      autoEscape={true}
                      textToHighlight={question_body}
                    />
                  </label>
                </Grid>

                <Grid item xs={4}>
                  <Helpful
                    questionId={question_id}
                    helpfulness={question_helpfulness}
                    subFontSize={subFontSize}
                  />
                  <AddAnswer
                    questionId={question_id}
                    subFontSize={subFontSize}
                  />
                  <br />
                </Grid>
                <Grid item xs={12}>
                  <AnswerModal
                    answers={answers}
                    subFontSize={subFontSize}
                    aFontSize={aFontSize}
                    qFontSize={qFontSize}
                  />
                </Grid>
              </Grid>
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
