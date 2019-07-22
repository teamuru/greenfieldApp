import React from "react";
import { pullHelpful } from "../../actions/questionsActions";
import { fetchQuestions } from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function Helpful({ questionId, helpfulness, componentDM }) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const handleClick = () => {
    // console.log("helpfull: ", questionId);
    pullHelpful(questionId);
    setHelpfulness(helpful + 1);
  };
  return (
    <React.Fragment>
      <span style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
        {`     Helpful?    `}
      </span>
      <button
        onClick={handleClick}
        style={{ textDecorationLine: "underline", border: "none", fontSize: 8 }}
      >
        Yes
      </button>
      <span style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
        {`(${helpful})     |     `}
      </span>
    </React.Fragment>
  );
}

// const mapStateToProps = store => ({
//   questions: store.questions
// });

// const mapDispatchToProps = dispatch => ({
//   fetchQuestions: id => {
//     dispatch(fetchQuestions(id));
//   }
// });

export default Helpful;
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Helpful);
