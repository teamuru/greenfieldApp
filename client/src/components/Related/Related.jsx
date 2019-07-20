/* eslint no-shadow: "off" */
/* eslint react/prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ProductCard from './ProductCard';
import { fetchAllRelated, fetchAllPhotos } from '../../actions/relatedActions';

const Related = (props) => {
  useEffect(() => {
    const {
      fetchAllRelated,
      fetchAllPhotos,
      location: { pathname }
    } = props;

    fetchAllRelated(pathname);
    fetchAllPhotos(pathname);
  }, []);

  const { relatedProducts, photos } = props;

  return (
    <div className="relatedCards">
      {relatedProducts.map((product, index) => (
        <ProductCard
          id={product.id}
          key={product.id}
          name={product.name}
          image={photos[index]}
          defaultPrice={product.default_price}
          category={product.category}
        />
      ))}
    </div>
  );
};

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
