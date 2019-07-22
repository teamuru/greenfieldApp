import React from "react";
import { pullHelpful } from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function AnswerHelpful({ answerer_name, date, helpfulness }) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const handleClick = () => {
    pullHelpful(questionId);
    setHelpfulness(helpful + 1);
  };
  return (
    <React.Fragment>
      <span style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
        {`    by ${answerer_name}, ${timeConvert(
          date
        )}      |      Helpful?   `}
      </span>
      <span
        style={{
          textDecorationLine: "underline",
          fontSize: 8
        }}
      >
        Yes
      </span>
      <span
        style={{ whiteSpace: "pre-wrap", fontSize: 8 }}
      >{` (${helpfulness})      |      `}</span>
      {/* <span style={{ whiteSpace: "pre-wrap", fontSize: 8 }}>
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
      </span> */}
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
