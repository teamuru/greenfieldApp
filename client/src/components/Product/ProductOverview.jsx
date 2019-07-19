import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchProduct } from '../../actions/productActions';

class ProductOverview extends Component {
  componentDidMount() {
    const { fetchProd } = this.props;
    fetchProd(1);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Product Overview</h1>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  fetchProd: PropTypes.func.isRequired
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
