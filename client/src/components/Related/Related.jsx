/* eslint no-shadow: "off" */
/* eslint react/prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { PropTypes } from 'prop-types';
import ProductCard from './ProductCard';
import OutfitCard from './OutfitCard';
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

  const [outfit, setOutfit] = useState([]);
  const [outfitExists, setExists] = useState(false);
  const [compare, setCompare] = useState(false);

  const handleCompareClick = () => {
    setCompare(!compare);
  };

  const addToOutfit = (product) => {
    // Don't need a check here because it will just overwrite the object if the key exists.
    localStorage.setItem(product.id, JSON.stringify(product));

    setOutfit([...outfit, product]);
    setExists(true);
  };

  const removeFromOutfit = (id) => {
    localStorage.removeItem(id);
    outfit.filter(item => item.id !== id);
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const values = [];
    if (keys.length > 0) {
      keys.forEach((key) => {
        values.push(JSON.parse(localStorage.getItem(key)));
      });

      setOutfit(values);
      setExists(true);
    }
  }, []);

  useEffect(() => {
    clearAllPhotos();
    clearAllRelated();
    fetchAllRelated(pathname);
    fetchAllPhotos(pathname);
  }, [pathname]);

  return (
    <>
      <div className="relatedCards">
        {relatedProducts.map((product, index) => (
          <ProductCard
            id={product.id}
            key={uuid()}
            name={product.name}
            image={photos[index]}
            defaultPrice={product.default_price}
            category={product.category}
            addToOutfit={addToOutfit}
            handleCompareClick={handleCompareClick}
          />
        ))}
      </div>
      <div className="outfitCards">
        {outfitExists
          && outfit.map(item => (
            <OutfitCard
              id={item.id}
              key={uuid()}
              name={item.name}
              img={item.img}
              defaultPrice={item.defaultPrice}
              category={item.category}
              removeFromOutfit={removeFromOutfit}
            />
          ))}
      </div>
    </>
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
