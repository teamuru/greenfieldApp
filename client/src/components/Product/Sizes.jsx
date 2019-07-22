import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

import { changeSelectedSku, changeSelectedQty } from '../../actions/productActions';

const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
`;

class Sizes extends Component {
  render() {
    const {
 skus, selectedSku, selectedQty, handleChangeSku, handleChangeQty 
} = this.props;
    const skuStock = skus[selectedSku] || 1;
    const qty = new Array(Math.min(skuStock, 15)).fill(1);
    for (let i = 0; i < qty.length; i += 1) {
      qty[i] += i;
    }
    return (
      <FormStyled>
        <div style={{ width: '65%', marginRight: '5%' }}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Select Size</InputLabel>
            <Select value={selectedSku} onChange={handleChangeSku} input={<OutlinedInput labelWidth={10} />}>
              {Object.keys(skus).map(sku => (skus[sku] ? (
                <MenuItem key={sku} value={sku}>
                  {sku}
                </MenuItem>
                ) : null))}
            </Select>
          </FormControl>
        </div>
        <div style={{ width: '35%' }}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Qty</InputLabel>
            <Select value={selectedQty} onChange={handleChangeQty} input={<OutlinedInput labelWidth={10} />}>
              {qty.map(skuQty => (
                <MenuItem key={skuQty} value={skuQty}>
                  {skuQty}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </FormStyled>
    );
  }
}

Sizes.propTypes = {
  skus: PropTypes.object.isRequired,
  selectedSku: PropTypes.string.isRequired,
  selectedQty: PropTypes.number.isRequired,
  handleChangeSku: PropTypes.func.isRequired,
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
  handleChangeQty: (e) => {
    dispatch(changeSelectedQty(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);
