import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

import { changeSelectedSku } from '../../actions/productActions';

class Sizes extends Component {
  render() {
    const { skus, selectedSku, handleChange } = this.props;
    return (
      <form>
        <FormControl variant="outlined" autoComplete="off">
          <InputLabel htmlFor="outlined-age-simple">Select Size</InputLabel>
          <Select value={selectedSku} onChange={handleChange} input={<OutlinedInput labelWidth={10} />}>
            {Object.keys(skus).map(sku => (
              <MenuItem key={sku} value={sku}>
                {sku}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

Sizes.propTypes = {
  skus: PropTypes.object.isRequired,
  selectedSku: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  skus: store.product.selectedStyle.skus,
  selectedSku: store.product.selectedSku
});

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(changeSelectedSku(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);
