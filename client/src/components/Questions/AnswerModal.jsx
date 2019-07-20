import React, { Component } from "react";
import LoadMore from "./LoadMore";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Photo from "./Photo";

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
      // return loadFunction(load, answers, keys, this.setLoadMore);
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
      {subInfo(date, helpfulness, answerer_name)}
    </List>
  );
};

//
const subInfo = (date, helpfulness, answerer_name) => {
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
      <span style={{ textDecorationLine: "underline", fontSize: 8 }}>
        Report
      </span>
    </React.Fragment>
  );
};

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
