import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

// import ReviewForm from './ReviewForm';
import Form from './Form/Form';

function getModalStyle() {
  const side = 30;

  return {
    position: 'absolute',
    left: `${side}%`,
    right: `${side}%`,
    overflow: 'scroll',
    height: '100%',
    display: 'block'
  };
}

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    fontSize: 10
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
              <Form />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

const SimpleModalWrapped = withStyles(styles)(AddReviewModal);

export default SimpleModalWrapped;
