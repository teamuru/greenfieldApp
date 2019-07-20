import React, { Component } from "react";
import AddQuestionModal from "./AddQuestionModal";
import SearchQuestions from "./SearchQuestions";
import { connect } from "react-redux";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions";
import { fetchQuestions } from "../../actions/questionsActions";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { questionList: [], count: 2 };
    this.setCount = this.setCount.bind(this);
  }
  componentDidMount() {
    const { fetchQuestions, location } = this.props;
    fetchQuestions(location.pathname);
  }

  setCount(count) {
    this.setState({ count: count });
  }

  render() {
    let questions = this.props.questions.data;
    return (
      <div>
        <h6>QUESTIONS{` & `}ANSWERS</h6>
        <SearchQuestions />
        <AddQuestionModal questions={questions} count={this.state.count} />
        <MoreAnsweredQuestions questions={questions} setCount={this.setCount} />
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
