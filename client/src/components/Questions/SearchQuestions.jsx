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
    let questCount = 3;
    let { setQuestionList, questionsData, handleSearch } = this.props;
    currentList = questionsData;

    if (e.target.value.length >= 3) {
      newList = currentList.filter(question => {
        let { question_body } = question;
        let questList = question_body.toLowerCase();
        let filter = e.target.value.toLowerCase();
        if (questList.includes(filter)) {
          return question;
        }
      });
      questCount = currentList.length;
    } else {
      newList = questionsData;
    }
    //highligth char

    handleSearch(questCount, e.target.value);
    setQuestionList(newList);
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("search value: ", this.state.value);
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
