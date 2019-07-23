import React, { Component } from "react";
import AddQuestionModal from "./AddQuestionModal";
import SearchQuestions from "./SearchQuestions";
import { connect } from "react-redux";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions";
import { fetchQuestions } from "../../actions/questionsActions";
import QuestionModel from "./QuesstionModel";
// import AddAnswer from "./AddAnswer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { questionList: [], count: 2, load: false };
    this.setCount = this.setCount.bind(this);
    this.setLoadMore = this.setLoadMore.bind(this);
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

  render() {
    let questions = this.props.questions.data;
    let { location } = this.props;
    return (
      <div>
        <h6>QUESTIONS{` & `}ANSWERS</h6>
        <SearchQuestions />
        <QuestionModel questions={questions} count={this.state.count} />
        <MoreAnsweredQuestions
          questions={questions}
          setCount={this.setCount}
          setLoadMore={this.setLoadMore}
          load={this.state.load}
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
