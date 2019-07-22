/* eslint no-shadow: "off" */
/* eslint react/prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ProductCard from './ProductCard';
import {
  fetchAllRelated,
  fetchAllPhotos,
  clearAllPhotos,
  clearAllRelated
} from '../../actions/relatedActions';

const Related = (props) => {
  const {
    relatedProducts,
    photos,
    fetchAllRelated,
    fetchAllPhotos,
    clearAllPhotos,
    clearAllRelated,
    location: { pathname }
  } = props;

  useEffect(() => {
    clearAllPhotos();
    clearAllRelated();
    fetchAllRelated(pathname);
    fetchAllPhotos(pathname);
  }, [pathname]);

  return (
    <div className="relatedCards">
      {relatedProducts.map((product, index) => (
        <ProductCard
          id={product.id}
          // key={product.id}
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
  },
  clearAllPhotos: () => {
    dispatch(clearAllPhotos());
  },
  clearAllRelated: () => {
    dispatch(clearAllRelated());
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
