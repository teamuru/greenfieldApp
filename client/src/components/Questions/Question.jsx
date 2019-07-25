import React, { Component } from "react";
import AddQuestionModal from "./AddQuestionModal";
import SearchQuestions from "./SearchQuestions";
import { connect } from "react-redux";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions";
import {
  fetchQuestions,
  displayQuestions,
  setProductId
} from "../../actions/questionsActions";
import QuestionModel from "./QuesstionModel";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      load: false,
      qFontSize: 20,
      aFontSize: 20,
      subFontSize: 16,
      highLight: ""
    };
    this.setCount = this.setCount.bind(this);
    this.setLoadMore = this.setLoadMore.bind(this);
    this.setQuestionList = this.setQuestionList.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    const { fetchQuestions, location, setProductId } = this.props;
    let prodId = Number(location.pathname.slice(1));
    fetchQuestions(prodId);
    setProductId(prodId);
  }

  setCount(count) {
    this.setState({ count: count });
  }

  handleSearch(count, char) {
    this.setState({ count: count, highLight: char });
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
    let {
      qFontSize,
      count,
      load,
      aFontSize,
      subFontSize,
      highLight
    } = this.state;

    // console.log("questions: ", questions);
    return (
      <div>
        <h5>QUESTIONS{` & `}ANSWERS</h5>
        <SearchQuestions
          setQuestionList={this.setQuestionList}
          questionsData={questionsData}
          handleSearch={this.handleSearch}
        />
        <QuestionModel
          questions={questions}
          count={count}
          highLight={highLight}
          qFontSize={qFontSize}
          aFontSize={aFontSize}
          subFontSize={subFontSize}
        />
        {questions.length >= 2 ? (
          <MoreAnsweredQuestions
            questions={questions}
            setCount={this.setCount}
            setLoadMore={this.setLoadMore}
            countQuestion={count}
            load={load}
          />
        ) : (
          ""
        )}

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
  },
  setProductId: id => {
    dispatch(setProductId(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
