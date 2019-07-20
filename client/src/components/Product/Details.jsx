import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Styles from './Styles';

function Details(props) {
  const {
 styles, selectedStyle, name, category 
} = props;
  const selStyle = styles[selectedStyle];
  const { sale_price: salePrice, original_price: originalPrice } = selStyle;
  // css style object NOT product style
  const saleStyle = { color: 'red', textDecoration: 'line-through' };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

Details.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
  styles: store.product.styles,
  selectedStyle: store.product.selectedStyle
});

export default connect(mapStateToProps)(Details);
