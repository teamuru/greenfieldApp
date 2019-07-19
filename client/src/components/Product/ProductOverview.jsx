import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';
import Details from './Details';
import Description from './Description';
import Checklist from './Checklist';
import { fetchProduct, fetchStyles } from '../../actions/productActions';

class ProductOverview extends Component {
  componentDidMount() {
    const { getProducts, getStyles, location } = this.props;
    getProducts(location.pathname);
    getStyles(location.pathname);
  }

  render() {
    const { product, styles } = this.props;
    return !product.data ? (
      <h1>Loading Product</h1>
    ) : (
      <React.Fragment>
        <Grid container xs={12}>
          <Grid container xs={7} justify="center">
            <Carousel img="https://unsplash.com/photos/SxAXphIPWeg" />
          </Grid>
          <Grid container xs={5} justify="flex-start">
            <Details styles={styles} />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid container xs={7} justify="center">
            <Description />
          </Grid>
          <Grid container xs={5} justify="flex-start">
            <Checklist />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

ProductOverview.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  product: store.product,
  styles: store.styles
});

const mapDispatchToProps = dispatch => ({
  getProducts: id => dispatch(fetchProduct(id)),
  getStyles: id => dispatch(fetchStyles(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);
