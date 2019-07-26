import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';

import { changeSelectedSku, changeSelectedQty } from '../../actions/productActions';

const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    const { resetSku } = this.props;
    this.setState({ open: true });
    resetSku();
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const {
 skus, selectedSku, selectedQty, handleChangeSku, handleChangeQty 
} = this.props;
    const styleStock = Object.values(skus).reduce((x, y) => x + y, 0);
    const skuStock = skus[selectedSku] || 1;
    const qty = new Array(Math.min(skuStock, 15)).fill(1);
    for (let i = 0; i < qty.length; i += 1) {
      qty[i] += i;
    }

    const showButton = () => {
      if (styleStock) {
        if (selectedSku) {
          return (
            <Button onClick={this.handleClick} variant="outlined" color="primary">
              Add To Cart
            </Button>
          );
        }
        return (
          <Button disabled variant="outlined" color="primary">
            Add To Cart
          </Button>
        );
      }
    };

    return (
      <React.Fragment>
        <FormStyled>
          <div style={{ width: '75%', marginRight: '5%' }}>
            <FormControl variant="outlined" fullWidth>
              {!styleStock ? (
                <React.Fragment>
                  <InputLabel>OUT OF STOCK</InputLabel>
                  <Select disabled input={<OutlinedInput labelWidth={10} />} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <InputLabel>Select Size</InputLabel>
                  <Select value={selectedSku} onChange={handleChangeSku} input={<OutlinedInput labelWidth={10} />}>
                    {Object.keys(skus).map(sku => (skus[sku] ? (
                      <MenuItem key={sku} value={sku}>
                        {sku}
                      </MenuItem>
                      ) : null))}
                  </Select>
                </React.Fragment>
              )}
            </FormControl>
          </div>
          <div style={{ width: '25%' }}>
            <FormControl variant="outlined" fullWidth>
              {selectedSku ? (
                <React.Fragment>
                  <InputLabel>Qty</InputLabel>
                  <Select value={selectedQty} onChange={handleChangeQty} input={<OutlinedInput labelWidth={10} />}>
                    {qty.map(skuQty => (
                      <MenuItem key={skuQty} value={skuQty}>
                        {skuQty}
                      </MenuItem>
                    ))}
                  </Select>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <InputLabel>-</InputLabel>
                  <Select disabled input={<OutlinedInput labelWidth={10} />} />
                </React.Fragment>
              )}
            </FormControl>
          </div>
        </FormStyled>
        {showButton()}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={open}
          autoHideDuration={5000}
          onClose={this.handleClose}
          message="Added Item To Cart"
        />
      </React.Fragment>
    );
  }
}

Sizes.propTypes = {
  skus: PropTypes.object.isRequired,
  selectedSku: PropTypes.string.isRequired,
  selectedQty: PropTypes.string.isRequired,
  handleChangeSku: PropTypes.func.isRequired,
  resetSku: PropTypes.func.isRequired,
  handleChangeQty: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  skus: store.product.selectedStyle.skus,
  selectedSku: store.product.selectedSku,
  selectedQty: store.product.selectedQty
});

const mapDispatchToProps = dispatch => ({
  handleChangeSku: (e) => {
    dispatch(changeSelectedQty(1));
    dispatch(changeSelectedSku(e.target.value));
  },
  resetSku: () => {
    dispatch(changeSelectedQty(1));
    dispatch(changeSelectedSku(''));
  },
  handleChangeQty: (e) => {
    dispatch(changeSelectedQty(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);
