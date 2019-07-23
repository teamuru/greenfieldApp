import React, { Component } from "react";
import LoadMore from "./LoadMore";
import Paper from "@material-ui/core/Paper";
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
    let answers = this.props.answers;
    let keys = Object.keys(answers);
    let load = this.state.load;
    // console.log("answers ", answers);

    if (keys.length > 0) {
      sortAnswer(keys, answers);
      if (load) {
        return (
          <React.Fragment>
            <Paper style={{ maxHeight: 200, overflow: "auto" }}>
              {keys.map(key => {
                return renderAnswers(key, answers);
              })}
            </Paper>
            {loadMore(keys, this.setLoadMore, load)}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            {renderAnswers(keys[0], answers)}
            {loadMore(keys, this.setLoadMore, load)}
          </React.Fragment>
        );
      }
    } else {
      return <div />;
    }
  }
}

// render answer modal
const renderAnswers = (key, answers) => {
  let { id, body, answerer_name, helpfulness, date, photos } = answers[key];
  return (
    <List key={`answerId:${id}`}>
      <span style={{ fontWeight: "bold", fontSize: 12 }}>A: </span>
      <span style={{ fontSize: 10 }}> {body} </span>
      <br />
      <Photo photos={photos} />
      {subInfo(date, helpfulness, answerer_name, id)}
    </List>
  );
};

//
const subInfo = (date, helpfulness, answerer_name, id) => {
  return (
    <React.Fragment>
      <AnswerHelpfulness
        answerer_name={answerer_name}
        date={date}
        helpfulness={helpfulness}
        id={id}
      />
      <Report />
    </React.Fragment>
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
const loadMore = (keys, setLoadMore, load) => {
  if (keys.length > 1)
    return <LoadMore setLoadMore={setLoadMore} loadMore={load} />;
  else return <div />;
};

export default AddAnswerModal;
