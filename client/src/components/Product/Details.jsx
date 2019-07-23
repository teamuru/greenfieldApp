import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Styles from './Styles';
import Sizes from './Sizes';

const OriginalPrice = styled(Typography)`
  padding-bottom: 2rem;
`;

const SalePrice = styled(Typography)`
  color: red;
`;

const OriginalPriceWithSale = styled(Typography)`
  text-decoration: line-through;
`;

function Details(props) {
  const {
 selectedStyle, rating, name, category 
} = props;
  const { sale_price: salePrice, original_price: originalPrice } = selectedStyle;
  // Check if there are styles in redux store before rendering
  return Object.keys(selectedStyle).length ? (
    <React.Fragment>
      <Rating readOnly value={rating} precision={0.25} size="small" />
      <Typography variant="body1">{category}</Typography>
      <Typography variant="h4">{name}</Typography>
      {salePrice > 0 ? (
        <React.Fragment>
          <SalePrice variant="body2">{`$${salePrice}`}</SalePrice>
          <OriginalPriceWithSale variant="body2">{`$${originalPrice}`}</OriginalPriceWithSale>
        </React.Fragment>
      ) : (
        <OriginalPrice variant="body2">{`$${originalPrice}`}</OriginalPrice>
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
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
  selectedStyle: store.product.selectedStyle,
  rating: store.product.rating
});

export default connect(mapStateToProps)(Details);
