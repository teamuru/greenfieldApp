import React, { Component } from "react";

class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: "normal" };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }
  handleHoverOn() {
    this.setState({ hover: "bold" });
  }
  handleHoverOff() {
    this.setState({ hover: "normal" });
  }
  render() {
    return (
      <span>
        <button
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
          style={{ fontWeight: this.state.hover, fontSize: 14 }}
        >
          ADD A QUESTION +
        </button>
      </span>
    );
  }
}

export default AddQuestionModal;
