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
    const { data, styles } = this.props;
    return !Object.keys(data).length || !styles.length ? (
      <h1>Loading Product</h1>
    ) : (
      <React.Fragment>
        <Grid item container xs={12}>
          <Grid item container xs={8} justify="center">
            <Carousel />
          </Grid>
          <Grid item container xs={4} justify="flex-start" direction="column">
            <Details name={data.name} category={data.category} />
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item container xs={8} justify="center">
            <Description slogan={data.slogan} description={data.description} />
          </Grid>
          <Grid item container xs={4} justify="flex-start" direction="column">
            <Checklist features={data.features} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

ProductOverview.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  styles: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  data: store.product.data,
  styles: store.product.styles
});

const mapDispatchToProps = dispatch => ({
  getProducts: id => dispatch(fetchProduct(id)),
  getStyles: id => dispatch(fetchStyles(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);
