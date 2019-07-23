import React, { Component } from "react";
import Input from "@material-ui/core/Input";

class SearchQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    let currentList = [];
    let newList = [];
    let { setQuestionList, questionsData } = this.props;
    currentList = questionsData;
    if (e.target.value.length > 3) {
      newList = currentList.filter(question => {
        let { question_body } = question;
        let questList = question_body.toLowerCase();
        let filter = e.target.value.toLowerCase();
        if (questList.includes(filter)) {
          return question;
        }
      });
    } else {
      newList = questionsData;
    }
    setQuestionList(newList);
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("search value: ", this.state.value);
    // this.handleOnChange();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.value}
          onChange={this.handleOnChange}
          placeholder="🔍   HAVE A QUESTION? SEARCH FOR ANSWERS...     "
          type="text"
          fullWidth
        />
      </form>
    );
  }
}

export default SearchQuestions;
