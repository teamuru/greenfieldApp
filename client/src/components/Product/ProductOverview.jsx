import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchProduct } from '../../actions/productActions';

class ProductOverview extends Component {
  componentDidMount() {
    const { fetchProd, location } = this.props;
    fetchProd(location.pathname);
  }

  render() {
    const { product } = this.props;
    return !product.data ? (
      <h1>Loading Product</h1>
    ) : (
      <React.Fragment>
        <h3>{product.data.name}</h3>
        <h6>{product.data.slogan}</h6>
      </React.Fragment>
    );
  }
}

ProductOverview.propTypes = {
  fetchProd: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  product: store.product
});

const mapDispatchToProps = dispatch => ({
  fetchProd: id => dispatch(fetchProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);
