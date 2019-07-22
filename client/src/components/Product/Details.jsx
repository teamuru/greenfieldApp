import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Styles from './Styles';
import Sizes from './Sizes';

function Details(props) {
  const { selectedStyle, name, category } = props;
  const { sale_price: salePrice, original_price: originalPrice } = selectedStyle;
  // css style object NOT product style
  const saleStyle = { color: 'red', textDecoration: 'line-through' };
  return Object.keys(selectedStyle).length ? (
    <React.Fragment>
      <Typography variant="body1">stars</Typography>
      <Typography variant="body1">{category}</Typography>
      <Typography variant="h4">{name}</Typography>
      {salePrice > 0 ? (
        <React.Fragment>
          <Typography variant="body2">{`$${salePrice}`}</Typography>
          <Typography variant="body2" style={saleStyle}>{`$${originalPrice}`}</Typography>
        </React.Fragment>
      ) : (
        <Typography variant="body2">{`$${originalPrice}`}</Typography>
      )}
      <Styles />
      <Sizes />
    </React.Fragment>
  ) : (
    <Typography variant="h6">details</Typography>
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
