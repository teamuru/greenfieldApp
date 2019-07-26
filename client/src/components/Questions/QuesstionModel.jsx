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
    sortQuestion(questions);
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

const sortQuestion = questions => {
  let rerun = true;

  while (rerun) {
    rerun = false;
    for (var i = 0; i < questions.length - 1; i++) {
      if (
        questions[i]["question_helpfulness"] <
        questions[i + 1]["question_helpfulness"]
      ) {
        let first = questions[i];
        let second = questions[i + 1];
        questions[i] = second;
        questions[i + 1] = first;
        rerun = true;
      }
    }
  }
  // return questions;
};

export default AddQuestionModal;
