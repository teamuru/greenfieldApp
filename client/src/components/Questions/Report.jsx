import React from "react";

const Report = () => {
  const [report, setReport] = React.useState("Report");
  const [hover, setHover] = React.useState("underline");
  const handleReport = () => {
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
        style={{ textDecorationLine: hover, fontSize: 8, border: "none" }}
      >
        {report}
      </button>
    </span>
  );
};

export default Report;
