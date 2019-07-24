import React from "react";
import { putHelpfulAnswer } from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function AnswerHelpful({ answerer_name, date, helpfulness, id }) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const [hover, setHover] = React.useState("underline");

  const handleHoverOn = () => {
    setHover("none");
  };
  const handleHoverOff = () => {
    setHover("underline");
  };
  const handleClick = () => {
    setHelpfulness(helpful + 1);
    putHelpfulAnswer(id);
  };
  return (
    <React.Fragment>
      <span style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
        {`    by ${answerer_name}, ${timeConvert(
          date
        )}      |      Helpful?   `}
      </span>
      <button
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        style={{
          textDecorationLine: hover,
          fontSize: 8,
          border: "none",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        Yes
      </button>
      <span
        style={{ whiteSpace: "pre-wrap", fontSize: 8 }}
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

export default AnswerHelpful;
