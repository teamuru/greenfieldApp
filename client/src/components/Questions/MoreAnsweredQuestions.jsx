import React, { Component } from 'react'

class MoreAnsweredQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadMoreQuestions: 2,
      questionsList: [],
      count: 1
    };
    this.hangelLoadMoreQuestions =this.hangelLoadMoreQuestions.bind(this)
  }

  componentDidMount(){
    this.setQuestions();
  }

  setQuestions (){
    // this.props.questions
    console.log('more questions: ', this.props.questions)
    this.setState({questionsList: this.props.questions})
    this.props.setQuestionList(this.state.questionsList)
  }
  hangelLoadMoreQuestions(questions){
    // this.setState({loadMoreQuestions: this.props.questions.length})
    this.props.setQuestionList(questions)
  }
  render() {
    
    let questionlist = [];
    return (
      <div>
        <button onClick={()=>{this.hangelLoadMoreQuestions(this.props.questions)} }>MORE ANSWERED QUESTIONS</button>
      </div>
    )
  }
}

export default MoreAnsweredQuestions