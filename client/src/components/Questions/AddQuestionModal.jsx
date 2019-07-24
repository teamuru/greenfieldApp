import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { postQuestion } from "../../actions/questionsActions";

class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "normal",
      open: false,
      question: "",
      name: "",
      email: "",
      fail: ""
    };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleHoverOn() {
    this.setState({ hover: "bold" });
  }
  handleHoverOff() {
    this.setState({ hover: "normal" });
  }
  handleClickOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  ValidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  handleSubmit() {
    let { question, name, email } = this.state;
    let id = Number(this.props.id.slice(1));
    if (question.length > 0 && name.length > 0 && name.length <= 60) {
      if (this.ValidateEmail(email)) {
        postQuestion(id, question, name, email);
        this.setState({ open: false, question: "", name: "", email: "" });
      } else this.setState({ fail: "Invalied email" });
    } else this.setState({ fail: "Blank with symbol * are required" });
  }
  handleQuestion(e) {
    this.setState({ question: e.target.value });
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  renderDialog() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Add A Question</DialogTitle>
        <p style={{ whiteSpace: "pre-wrap", color: "red" }}>{`  ${
          this.state.fail
        }`}</p>
        <DialogContent>
          <TextField
            label="Your Question"
            type="text"
            fullWidth
            multiline
            required
            onChange={this.handleQuestion}
          />
          <TextField
            label="Your nickname"
            type="text"
            inputProps={{ maxLength: 60 }}
            fullWidth
            required
            onChange={this.handleName}
          />
          <TextField
            label="Your email"
            type="text"
            fullWidth
            required
            onChange={this.handleEmail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  render() {
    return (
      <span>
        <button
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
          onClick={this.handleClickOpen}
          style={{
            fontWeight: this.state.hover,
            fontSize: 14,
            cursor: "pointer"
          }}
        >
          ADD A QUESTION +
        </button>
        {this.renderDialog()}
      </span>
    );
  }
}

export default AddQuestionModal;
