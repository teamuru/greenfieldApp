/* eslint no-shadow: "off" */
/* eslint react/prop-types: "off" */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ProductCard from './ProductCard';
import { fetchAllRelated } from '../../actions/relatedActions';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      fetchAllRelated,
      location: { pathname }
    } = this.props;

    fetchAllRelated(pathname);
  }

  render() {
    const { relatedProducts } = this.props;

    return (
      <div>
        {relatedProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            defaultPrice={product.default_price}
            category={product.category}
          />
        ))}
        ;
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllRelated: (id) => {
    dispatch(fetchAllRelated(id));
  }
});

const mapStateToProps = state => ({
  relatedProducts: state.related.relatedProducts
});

Related.propTypes = {
  fetchAllRelated: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);
