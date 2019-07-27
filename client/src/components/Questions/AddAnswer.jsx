import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import isImageUrl from "is-image-url";
import { connect } from "react-redux";
import { postAddAnswer, fetchQuestions } from "../../actions/questionsActions";

function AddAnswer({ questionId, subFontSize, fetchQuestions, productId }) {
  const [open, setOpen] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [photos, setPhotos] = React.useState([]);
  const [fail, setFail] = React.useState("");
  const [hover, setHover] = React.useState("underline");

  const handleHoverOn = () => {
    setHover("none");
  };
  const handleHoverOff = () => {
    setHover("underline");
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhoto(e) {
    setPhoto(e.target.value);
  }

  function LoadMorePhoto() {
    if (isImageUrl(photo)) {
      setPhotos([...photos, photo]);
      setPhoto("");
      setFail("");
    } else {
      setFail("fail image url");
    }
  }

  const handleSubmit = () => {
    if (answer.length > 0 && name.length > 0) {
      if (ValidateEmail(email)) {
        handleClose();
        postAddAnswer(answer, name, email, photos, questionId);
        setAnswer("");
        setName("");
        setEmail("");
        setPhoto("");
        setPhotos([]);
        setFail("");
        setTimeout(function() {
          fetchQuestions(productId);
        }, 1000);
      } else {
        setFail("Invalied Eamil");
      }
    } else {
      setFail("Plase fill all blank with symbol *");
    }
  };

  const answerTextFile = () => (
    <TextField
      label="Your Answer"
      type="text"
      fullWidth
      multiline
      rows="2"
      required
      onChange={handleAnswerChange}
    />
  );

  const nameTextFile = () => (
    <TextField
      label="Your nickname"
      type="text"
      inputProps={{ maxLength: 60 }}
      fullWidth
      required
      onChange={handleName}
    />
  );
  const emailTextFile = () => (
    <TextField
      label="Your email"
      type="text"
      fullWidth
      required
      onChange={handleEmail}
    />
  );
  const loadPhoto = (photo, i) => {
    return (
      <React.Fragment key={`loadPhotoId${i}`}>
        <img src={photo} width={100} height={60} mode="fit" />
        <span style={{ whiteSpace: "pre-wrap" }}>{`   `}</span>
      </React.Fragment>
    );
  };

  const upLoadTextFile = () => (
    <TextField
      label="Upload photo"
      type="text"
      value={photo}
      fullWidth
      onChange={handlePhoto}
    />
  );

  function ValidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <span>
      <button
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        onClick={handleClickOpen}
        style={{
          border: "none",
          textDecorationLine: hover,
          fontSize: subFontSize,
          cursor: "pointer",
          color: "gray"
        }}
      >
        Add Answer
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Add Answer</DialogTitle>
        <p style={{ whiteSpace: "pre-wrap", color: "red" }}>{`  ${fail}`}</p>
        <DialogContent>
          {answerTextFile()}
          {nameTextFile()}
          {emailTextFile()}
          <DialogContentText>
            {photos.map((photo, i) => loadPhoto(photo, i))}
          </DialogContentText>
          {upLoadTextFile()}
          <Button onClick={LoadMorePhoto}>Upload Photo</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}

const mapStateToProps = store => ({
  subFontSize: store.questions.subFontSize,
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
)(AddAnswer);
