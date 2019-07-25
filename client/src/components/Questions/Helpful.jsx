import React from "react";
import { connect } from "react-redux";
import { putHelpful, fetchQuestions } from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function Helpful({
  questionId,
  helpfulness,
  subFontSize,
  productId,
  fetchQuestions
}) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const [hover, setHover] = React.useState("underline");
  const handleClick = () => {
    putHelpful(questionId);
    setHelpfulness(helpful + 1);
    fetchQuestions(productId);
  };
  const handleHoverOn = () => {
    setHover("none");
  };
  const handleHoverOff = () => {
    setHover("underline");
  };
  return (
    <React.Fragment>
      <span
        style={{ whiteSpace: "pre-wrap", fontSize: subFontSize, color: "gray" }}
      >
        {`     Helpful?`}
      </span>
      <button
        onClick={handleClick}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        style={{
          textDecorationLine: hover,

          border: "none",
          fontSize: subFontSize,
          cursor: "pointer",
          color: "gray"
        }}
      >
        Yes
      </button>
      <span
        style={{ whiteSpace: "pre-wrap", fontSize: subFontSize, color: "gray" }}
      >
        {`(${helpful})     |     `}
      </span>
    </React.Fragment>
  );
}

const mapStateToProps = store => ({
  subFontSize: store.questions.subFontSize,
  productId: store.questions.productId
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: id => {
    dispatch(fetchQuestions(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Helpful);
