import React from "react";
import { ReportAnswer } from "../../actions/questionsActions";

const Report = ({ id, subFontSize }) => {
  const [report, setReport] = React.useState("Report");
  const [hover, setHover] = React.useState("underline");

  const handleReport = () => {
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

export default Report;
