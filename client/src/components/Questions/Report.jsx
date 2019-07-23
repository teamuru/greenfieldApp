import React from "react";
import { ReportAnswer } from "../../actions/questionsActions";

//PUT /qa/answer/:answer_id/report
const Report = ({ id }) => {
  const [report, setReport] = React.useState("Report");
  const [hover, setHover] = React.useState("underline");

  const handleReport = () => {
    // console.log("report props", id);
    ReportAnswer(id);
    setReport("Reported");
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
          fontSize: 8,
          border: "none",
          cursor: "pointer"
        }}
      >
        {report}
      </button>
    </span>
  );
};

export default Report;
