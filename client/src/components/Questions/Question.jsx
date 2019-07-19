import React, { Component } from "react";
import AddQuestionModal from "./AddQuestionModal";
import SearchQuestions from "./SearchQuestions";
import { connect } from "react-redux";
import MoreAnsweredQuestions from './MoreAnsweredQuestions'


class Question extends Component {
  constructor(props){
    super(props)
    this.state = {questionList: [], count: 2}
    this.handleOnClickMoreQuestions =this.handleOnClickMoreQuestions.bind(this);
    this.setQuestionList = this.setQuestionList.bind(this)
    this.setCount = this.setCount.bind(this)
  }
  // componentDidMount(){
  //   console.log('question on question: ', this.props.questions.data)
  //   // this.setQuestionList()  
  // }

  setQuestionList(questions){
    console.log('question on question: ', this.props.questions.data)
    // let questions = this.props.questions.data
    let questionL = []
    for(let i = 0; i< this.state.count; i++){
      questionL.push(questions[i])
    }
    this.setState({questionList: questionL})
  }

  handleOnClickMoreQuestions(){
    console.log('click on more answered questions')
    this.setState({count: this.state.count - 1})
  }

  setCount(count){
    // let count = this.state.count -1
    this.setState({count: count})
  }

  render() {
    let questions = this.props.questions.data
    return (
      <div>
        <h6>QUESTIONS{` & `}ANSWERS</h6>
        <SearchQuestions />
        <AddQuestionModal questions={questions} count={this.state.count} />
        <MoreAnsweredQuestions questions={questions} setCount={this.setCount}/>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  questions: store.questions
});

export default connect(mapStateToProps)(Question);;
