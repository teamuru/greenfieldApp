import React, { Component } from "react";
import { connect } from "react-redux";
import LoadMore from "./LoadMore";

class AddAnswerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { loadMore: false };
    this.setLoadMore = this.setLoadMore.bind(this);
  }
  setLoadMore() {
    this.setState({ loadMore: true });
  }
  render() {
    // console.log("answers ", this.props.answers);
    let keys = Object.keys(this.props.answers);
    const loadMore = () => {
      if (keys.length > 1) return <LoadMore />;
      else return <div />;
    };

    if (keys.length > 0) {
      //TODO: sort answer keys here
      sortAnswer(keys, this.props.answers);
      if (this.state.loadMore) {
        return (
          <div>
            {keys.map(key => {
              return renderItem(key, this.props.answers);
            })}
          </div>
        );
      } else {
        return (
          <div>
            {renderItem(keys[0], this.props.answers)}
            {loadMore()}
          </div>
        );
      }
    } else {
      return <div />;
    }
  }
}

// render answer modal
const renderItem = (key, answers) => {
  let { id, body, answerer_name, helpfulness, date } = answers[key];
  return (
    <div key={`answerId:${id}`}>
      <label style={{ fontWeight: "bold", fontSize: 12 }}>A: </label>
      <label style={{ textAlign: "right", fontSize: 10 }}> {body} </label>
      <br />

      <label style={{ textAlign: "right", fontSize: 8 }}>
        by {answerer_name} Helpful? {timeConvert(date)} {"    "}
      </label>
      <label style={{ textDecorationLine: "underline", fontSize: 8 }}>
        Yes
      </label>
      <label style={{ textAlign: "right", fontSize: 8 }}>
        {`(${helpfulness})`}
        {"    "}|{"    "}
      </label>
      <label style={{ textDecorationLine: "underline", fontSize: 8 }}>
        Report
      </label>
    </div>
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

export default AddAnswerModal;
