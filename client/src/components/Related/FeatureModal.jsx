import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import store from '../../store';

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
  const {
 modalOpen, modalClose, clickedFeatures, clickedName 
} = props;
  const classes = useStyles();

  /* table with headers of currentProduct and clickedName
     Checkmark       feature              checkmark */

  if (modalOpen) {
    const currentFeatures = store.getState().product.data.features;
    const currentProduct = store.getState().product.data.name;
    const zipped = _.zip(currentFeatures, clickedFeatures);
    return (
      <>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalOpen}
          onClose={modalClose}
        >
          <div className="FeatureModal">
            <div className={classes.paper}>
              <h5 id="modal-title">Features</h5>
              <table>
                <th>{currentProduct}</th>
                <th />
                <th>{clickedName}</th>
                {/* item0 */}
                {zipped.map(item => (
                  <tr>
                    {item[0] !== undefined
                      ? item[0].value
                      : console.log('fail0')}
                    {item[1] !== undefined
                      ? item[1].value
                      : console.log('fail1')}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </Modal>
      </>
    );
  }
  return null;
};

FeatureModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
  clickedFeatures: PropTypes.array.isRequired,
  clickedName: PropTypes.string.isRequired
};

export default FeatureModal;
