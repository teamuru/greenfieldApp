/* eslint no-shadow: "off" */
/* eslint react/prop-types: "off" */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ProductCard from './ProductCard';
import { fetchAllRelated, fetchAllPhotos } from '../../actions/relatedActions';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      fetchAllRelated,
      fetchAllPhotos,
      location: { pathname }
    } = this.props;

    fetchAllRelated(pathname);
    fetchAllPhotos(pathname);
  }

  render() {
    const { relatedProducts, photos } = this.props;

    return (
      <div>
        {relatedProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={photos[index]}
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
  },
  fetchAllPhotos: (id) => {
    dispatch(fetchAllPhotos(id));
  }
});

const mapStateToProps = state => ({
  relatedProducts: state.related.relatedProducts,
  photos: state.related.photos
});

Related.propTypes = {
  fetchAllRelated: PropTypes.func.isRequired,
  fetchAllPhotos: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);
