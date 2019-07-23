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
    console.log(e.target.value);
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
