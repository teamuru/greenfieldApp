import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

import { changeSelectedSku, changeSelectedQty } from '../../actions/productActions';

class Sizes extends Component {
  render() {
    const {
 skus, selectedSku, selectedQty, handleChangeSku, handleChangeQty 
} = this.props;
    const inStock = skus[selectedSku] || 0;
    const qty = new Array(Math.min(inStock, 15)).fill(1);
    // CSS stlye
    const formStyle = { display: 'flex', justifyContent: 'space-between' };
    return (
      <form style={formStyle}>
        <div style={{ width: '65%', marginRight: '5%' }}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Select Size</InputLabel>
            <Select value={selectedSku} onChange={handleChangeSku} input={<OutlinedInput labelWidth={10} />}>
              {Object.keys(skus).map(sku => (
                <MenuItem key={sku} value={sku}>
                  {sku}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ width: '35%' }}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Qty</InputLabel>
            <Select value={selectedQty} onChange={handleChangeQty} input={<OutlinedInput labelWidth={10} />}>
              {qty.map((skuQty, index) => (
                <MenuItem key={skuQty + index} value={skuQty + index}>
                  {skuQty + index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </form>
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
    dispatch(changeSelectedQty(0));
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
