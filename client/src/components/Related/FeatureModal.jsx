import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Check from '@material-ui/icons/Check';
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

  const checker = (feature) => {
    if (feature.value !== undefined) {
      return <Check />;
    }
  };

  const compare = (feature) => {
    if (feature[1] !== undefined && feature[0] !== undefined) {
      if (feature[0].value === feature[1].value) {
        return <Check />;
      }
    } else return '';
  };

  const valueChecker = (feature) => {
    if (feature.value !== undefined) {
      return feature.value;
    }
  };

  const currentFeatures = store.getState().product.data.features;
  const currentProduct = store.getState().product.data.name;
  const zipped = _.zip(currentFeatures, clickedFeatures);

  if (modalOpen) {
    console.log('ZIPPED: ', zipped);

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
                <tbody>
                  <tr>
                    <th>{currentProduct}</th>
                    <th />
                    <th>{clickedName}</th>
                  </tr>
                  {zipped.map(item => (
                    <tr>
                      <td>{checker(item[0])}</td>
                      <td>{valueChecker(item[0])}</td>
                      <td>{compare(item)}</td>
                    </tr>
                  ))}
                </tbody>
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
