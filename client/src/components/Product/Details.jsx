import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Styles from './Styles';
import Sizes from './Sizes';

function Details(props) {
  const { selectedStyle, name, category } = props;
  const { sale_price: salePrice, original_price: originalPrice } = selectedStyle;
  // css style object NOT product style
  const saleStyle = { color: 'red', textDecoration: 'line-through' };
  return Object.keys(selectedStyle).length ? (
    <React.Fragment>
      <h6>stars</h6>
      <h6>{category}</h6>
      <h3>{name}</h3>
      {salePrice > 0 ? (
        <React.Fragment>
          <p>{`$${salePrice}`}</p>
          <p style={saleStyle}>{`$${originalPrice}`}</p>
        </React.Fragment>
      ) : (
        <p>{`$${originalPrice}`}</p>
      )}
      <Styles />
      <Sizes />
    </React.Fragment>
  ) : (
    <h6>details</h6>
  );
}

Details.propTypes = {
  selectedStyle: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
  selectedStyle: store.product.selectedStyle
});

export default connect(mapStateToProps)(Details);
