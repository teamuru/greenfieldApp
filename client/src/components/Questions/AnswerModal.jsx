import React, { Component } from "react";
import LoadMore from "./LoadMore";
import List from "@material-ui/core/List";
import Photo from "./Photo";
import AnswerHelpfulness from "./AnswerHelpfulness";
import Report from "./Report";

class AddAnswerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { load: false };
    this.setLoadMore = this.setLoadMore.bind(this);
  }
  setLoadMore() {
    let load = this.state.load;
    load ? this.setState({ load: false }) : this.setState({ load: true });
  }
  render() {
    let { answers, aFontSize, subFontSize, qFontSize } = this.props;
    let keys = Object.keys(answers);
    let load = this.state.load;
    // console.log("answers ", answers);

    if (keys.length > 0) {
      sortAnswer(keys, answers);
      if (load) {
        return (
          <React.Fragment>
            <div style={{ maxHeight: 200, overflow: "auto" }}>
              {keys.map(key => {
                return renderAnswers(
                  key,
                  answers,
                  aFontSize,
                  qFontSize,
                  subFontSize
                );
              })}
            </div>
            {loadMore(keys, this.setLoadMore, load, aFontSize)}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            {renderAnswers(keys[0], answers, aFontSize, qFontSize, subFontSize)}
            {loadMore(keys, this.setLoadMore, load, aFontSize)}
          </React.Fragment>
        );
      }
    } else {
      return <div />;
    }
  }
}

// render answer modal
const renderAnswers = (key, answers, aFontSize, qFontSize, subFontSize) => {
  let { id, body, answerer_name, helpfulness, date, photos } = answers[key];
  return (
    <List key={`answerId:${id}`}>
      <span style={{ fontWeight: "bold", fontSize: qFontSize }}>A: </span>
      <span style={{ fontSize: aFontSize }}> {body} </span>
      <br />
      <Photo photos={photos} />
      <AnswerHelpfulness
        answerer_name={answerer_name}
        date={date}
        helpfulness={helpfulness}
        id={id}
      />
      <Report id={id} subFontSize={subFontSize} />
    </List>
  );
};

//sort answers by helpfulness
const sortAnswer = (keys, answers) => {
  let rerun = true;
  while (rerun) {
    rerun = false;
    for (var i = 0; i < keys.length - 1; i++) {
      if (
        answers[keys[i]]["helpfulness"] < answers[keys[i + 1]]["helpfulness"]
      ) {
        let first = keys[i];
        let second = keys[i + 1];
        keys[i] = second;
        keys[i + 1] = first;
        rerun = true;
      }
    }
  }
  return keys;
};

//load more function
const loadMore = (keys, setLoadMore, load, aFontSize) => {
  if (keys.length > 1)
    return <LoadMore setLoadMore={setLoadMore} aFontSize={aFontSize} />;
  else return <div />;
};

export default AddAnswerModal;
