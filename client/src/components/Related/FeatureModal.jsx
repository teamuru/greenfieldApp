import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none'
  }
}));

const FeatureModal = (props) => {
  const { modalOpen, modalClose } = props;
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalOpen}
      onClose={modalClose}
    >
      <div className="FeatureModal">
        <div className={classes.paper}>
          <h2 id="modal-title">Features</h2>
          <p id="simple-modal-description" />
        </div>
      </div>
    </Modal>
  );
};

FeatureModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired
};

export default FeatureModal;
