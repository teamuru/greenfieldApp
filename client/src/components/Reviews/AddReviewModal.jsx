import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';

function getModalStyle() {
  const top = 1;
  const left = 25;
  return {
    top: `${top}%`,
    margin: 'auto',
    left: `${left}%`
  };
}

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
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
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant="outlined"
          style={{ padding: '10px', margin: '10px', fontSize: 20 }}
        >
          ADD A REVIEW +
        </Button>
        <div>
          <Modal open={this.state.open} onClose={this.handleClose}>
            <div style={getModalStyle()} className={classes.paper}>
              <ReviewForm />
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

const SimpleModalWrapped = withStyles(styles)(AddReviewModal);

export default SimpleModalWrapped;
