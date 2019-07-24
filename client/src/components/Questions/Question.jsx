import React, { Component } from "react";
import AddQuestionModal from "./AddQuestionModal";
import SearchQuestions from "./SearchQuestions";
import { connect } from "react-redux";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions";
import {
  fetchQuestions,
  displayQuestions
} from "../../actions/questionsActions";
import QuestionModel from "./QuesstionModel";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      load: false,
      qFontSize: 20,
      aFontSize: 18,
      subFontSize: 16
    };
    this.setCount = this.setCount.bind(this);
    this.setLoadMore = this.setLoadMore.bind(this);
    this.setQuestionList = this.setQuestionList.bind(this);
  }
  componentDidMount() {
    const { fetchQuestions, location } = this.props;
    fetchQuestions(location.pathname);
  }

  setCount(count) {
    this.setState({ count: count });
  }

  setLoadMore() {
    let load = this.state.load;
    load ? this.setState({ load: false }) : this.setState({ load: true });
  }

  setQuestionList(questionList) {
    const { displayQuestions } = this.props;
    displayQuestions(questionList);
  }

  render() {
    let questions = this.props.questions.displayList;
    let questionsData = this.props.questions.data;
    let { location } = this.props;
    let { qFontSize, count, load, aFontSize, subFontSize } = this.state;

    // console.log("questions: ", questions);
    return (
      <div>
        <h5>QUESTIONS{` & `}ANSWERS</h5>
        <SearchQuestions
          setQuestionList={this.setQuestionList}
          questionsData={questionsData}
        />
        <QuestionModel
          questions={questions}
          count={count}
          qFontSize={qFontSize}
          aFontSize={aFontSize}
          subFontSize={subFontSize}
        />
        <MoreAnsweredQuestions
          questions={questions}
          setCount={this.setCount}
          setLoadMore={this.setLoadMore}
          load={load}
        />
        <AddQuestionModal id={location.pathname} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  questions: store.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: id => {
    dispatch(fetchQuestions(id));
  },
  displayQuestions: questions => {
    dispatch(displayQuestions(questions));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
