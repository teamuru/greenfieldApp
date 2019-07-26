import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Styles from './Styles';
import Sizes from './Sizes';

import theme from '../../theme';

const OriginalPrice = styled(Typography)`
  padding-bottom: 2rem;
`;

const SalePrice = styled(Typography)`
  color: red;
`;

const OriginalPriceWithSale = styled(Typography)`
  text-decoration: line-through;
`;

const RatingContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledA = styled.a`
  text-decoration: none;
  margin-left: 0.5rem;
  color: ${theme.palette.primary.main};
  &:visited {
    color: ${theme.palette.primary.main};
  }
  &:hover {
    color: ${theme.palette.secondary.main};
  }
`;

function Details(props) {
  const {
 selectedStyle, rating, reviewsNum, name, category 
} = props;
  const { sale_price: salePrice, original_price: originalPrice } = selectedStyle;

  const reviewsText = (n) => {
    if (n === 1) {
      return 'Read the only review';
    }
    if (n === 2) {
      return 'Read both reviews';
    }
    return `Read all ${n} reviews`;
  };

  // Check if there are styles in redux store before rendering
  return Object.keys(selectedStyle).length ? (
    <React.Fragment>
      {reviewsNum ? (
        <RatingContainer>
          <Rating readOnly value={rating} precision={0.25} size="small" />
          <StyledA href="#reviews">
            <Typography style={{ fontSize: '.75rem' }} variant="subtitle2">
              {reviewsText(reviewsNum)}
            </Typography>
          </StyledA>
        </RatingContainer>
      ) : null}
      <Typography variant="body1">{category}</Typography>
      <Typography variant="h4">{name}</Typography>
      {salePrice > 0 ? (
        <React.Fragment>
          <SalePrice variant="body2">{`$${salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</SalePrice>
          <OriginalPriceWithSale variant="body2">{`$${originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</OriginalPriceWithSale>
        </React.Fragment>
      ) : (
        <OriginalPrice variant="body2">{`$${originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</OriginalPrice>
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
  reviewsNum: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
  selectedStyle: store.product.selectedStyle,
  rating: store.product.rating,
  reviewsNum: store.reviews.data.results.length
});

export default connect(mapStateToProps)(Details);
