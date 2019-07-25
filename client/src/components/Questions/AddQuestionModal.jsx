import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { fetchQuestions, postQuestion } from "../../actions/questionsActions";

class AddQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "bold",
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
    this.setState({ hover: "normal" });
  }
  handleHoverOff() {
    this.setState({ hover: "bold" });
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
    let { productId, fetchQuestions } = this.props;
    if (question.length > 0 && name.length > 0) {
      if (this.ValidateEmail(email)) {
        //post add question function
        postQuestion(id, question, name, email);

        setTimeout(function() {
          fetchQuestions(productId);
        }, 1000);
        //reset all temp state to empty
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
            label="Your Question max 1000 character"
            type="text"
            fullWidth
            inputProps={{ maxLength: 1000 }}
            multiline
            required
            onChange={this.handleQuestion}
          />
          <TextField
            label="Your nickname max 60 character"
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
            fontSize: 24,
            cursor: "pointer",
            padding: "20px"
          }}
        >
          ADD A QUESTION +
        </button>
        {this.renderDialog()}
      </span>
    );
  }
}

const mapStateToProps = store => ({
  productId: store.questions.productId
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: id => {
    dispatch(fetchQuestions(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuestionModal);

// export default AddQuestionModal;
