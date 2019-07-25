import React from "react";
import { connect } from "react-redux";
import {
  putHelpful,
  fetchQuestions,
  putHelpfulAnswer
} from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function AnswerHelpful({
  answerer_name,
  date,
  helpfulness,
  id,
  subFontSize,
  productId,
  fetchQuestions
}) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const [hover, setHover] = React.useState("underline");

  const handleHoverOn = () => {
    setHover("none");
  };
  const handleHoverOff = () => {
    setHover("underline");
  };
  const handleClick = () => {
    putHelpfulAnswer(id);
    setHelpfulness(helpful + 1);
    // fetchQuestions(productId);
    setTimeout(function() {
      fetchQuestions(productId);
    }, 500);
  };
  const styples = {
    whiteSpace: "pre-wrap",
    fontSize: subFontSize,
    color: "gray"
  };
  const boldSeller = () => (
    <span style={{ fontWeight: "bold", fontSize: subFontSize, color: "gray" }}>
      Seller
    </span>
  );
  return (
    <React.Fragment>
      <span style={styples}>{`    by ${answerer_name} `}</span>
      <span style={styples}>
        {answerer_name === "Seller" ? "-" : ""}
        {answerer_name === "Seller" ? boldSeller() : ""}
      </span>
      <span style={styples}>{`, ${timeConvert(
        date
      )}      |      Helpful?`}</span>
      <button
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        style={{
          textDecorationLine: hover,
          fontSize: subFontSize,
          color: "gray",
          border: "none",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        Yes
      </button>
      <span
        style={{ whiteSpace: "pre-wrap", color: "gray", fontSize: subFontSize }}
      >{` (${helpful})      |      `}</span>
    </React.Fragment>
  );
}

//change time from <2018-02-08T00:00:00.000Z> to  <February 08, 2018>
const timeConvert = time => {
  let monthList = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  let year = time.slice(0, 4);
  let month = time.slice(5, 7);
  let date = time.slice(8, 10);

  return monthList[month] + " " + date + ", " + year;
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
)(AnswerHelpful);

// export default AnswerHelpful;
