import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    // width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
    // padding: theme.spacing.unit * 4
  }
});
class AddReviewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen} size="large" variant="outlined">
          ADD A REVIEW +
        </Button>
        <div>
          <Modal open={this.state.open} onClose={this.handleClose}>
            <div
            // style={getModalStyle()} className={classes.paper}
            >
              <Typography
              // variant="title" id="modal-title"
              >
                Text in a modal
              </Typography>{' '}
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

AddReviewModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(AddReviewModal);

export default SimpleModalWrapped;
