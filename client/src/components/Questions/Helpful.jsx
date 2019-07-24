import React from "react";
import { putHelpful } from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function Helpful({ questionId, helpfulness, subFontSize }) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const [hover, setHover] = React.useState("underline");
  const handleClick = () => {
    putHelpful(questionId);
    setHelpfulness(helpful + 1);
  };
  const handleHoverOn = () => {
    setHover("none");
  };
  const handleHoverOff = () => {
    setHover("underline");
  };
  return (
    <React.Fragment>
      <span style={{ whiteSpace: "pre-wrap", fontSize: subFontSize }}>
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
          cursor: "pointer"
        }}
      >
        Yes
      </button>
      <span style={{ whiteSpace: "pre-wrap", fontSize: subFontSize }}>
        {`(${helpful})     |     `}
      </span>
    </React.Fragment>
  );
}

export default Helpful;
