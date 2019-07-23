import React from "react";
import { putHelpful } from "../../actions/questionsActions";

//PUT /qa/question/:question_id/helpful
function Helpful({ questionId, helpfulness }) {
  const [helpful, setHelpfulness] = React.useState(helpfulness);
  const handleClick = () => {
    putHelpful(questionId);
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

export default Helpful;
