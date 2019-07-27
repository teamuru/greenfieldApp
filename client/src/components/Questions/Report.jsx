import React from "react";
import { connect } from "react-redux";
import { ReportAnswer, fetchQuestions } from "../../actions/questionsActions";

const Report = ({ id, subFontSize, fetchQuestions, productId }) => {
  const [report, setReport] = React.useState("Report");
  const [hover, setHover] = React.useState("underline");

  const handleReport = () => {
    ReportAnswer(id);
    setReport("Reported");

    setTimeout(function() {
      fetchQuestions(productId);
    }, 1000);
  };

  const handleHoverOn = () => {
    setHover("none");
  };
  const handleHoverOff = () => {
    setHover("underline");
  };

  return (
    <span>
      <button
        onClick={handleReport}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        style={{
          textDecorationLine: hover,
          fontSize: subFontSize,
          color: "gray",
          border: "none",
          cursor: "pointer"
        }}
      >
        {report}
      </button>
    </span>
  );
};

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
)(Report);

// export default Report;
