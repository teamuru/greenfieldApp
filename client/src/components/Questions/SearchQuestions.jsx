import React, { Component } from "react";

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
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("search value: ", this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          style={{ fontSize: 16 }}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          size="90"
          value={this.state.value}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

export default SearchQuestions;
