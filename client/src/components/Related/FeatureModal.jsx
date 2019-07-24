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
  const { modalOpen, modalClose, clickedFeatures } = props;
  const classes = useStyles();
  // <p id="simple-modal-description" />;
  // console.log('CURRENT: ', currentFeatures);
  // console.log('clicked: ', clickedFeatures);
  let zipped = [];

  if (modalOpen) {
    const currentFeatures = store.getState().product.data.features;
    zipped = _.zip(currentFeatures, clickedFeatures);
  }
  // const zipped = _.zipWith(currentFeatures, clickedFeatures, (item, value) => _.defaults({ clicked: value }, item));

  console.log('ZIPPED: ', JSON.stringify(zipped));
  if (zipped.length > 0) {
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
              {zipped.map((item, index) => (
                <>
                  <p>
                    {item[0] !== undefined
                      ? item[0].value
                      : console.log('fail0')}
                  </p>
                  <p>
                    {item[1] !== undefined
                      ? item[1].value
                      : console.log('fail1')}
                  </p>
                  {/* <p>{JSON.stringify(item)}</p> */}
                </>
              ))}
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
  clickedFeatures: PropTypes.array.isRequired
};

export default FeatureModal;
