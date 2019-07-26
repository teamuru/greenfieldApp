/* eslint no-shadow: "off" */
/* eslint react/prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { PropTypes } from 'prop-types';
import {
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ProductCard from './ProductCard';
import OutfitCard from './OutfitCard';
import FeatureModal from './FeatureModal';

import {
  fetchAllRelated,
  fetchAllPhotos,
  fetchAllStars,
  clearAllPhotos,
  clearAllRelated,
  clearAllStars
} from '../../actions/relatedActions';


const Related = (props) => {
  const {
    relatedProducts,
    photos,
    stars,
    fetchAllRelated,
    fetchAllPhotos,
    fetchAllStars,
    clearAllPhotos,
    clearAllRelated,
    clearAllStars,
    location: { pathname }
  } = props;

  const [outfit, setOutfit] = useState([]);
  const [outfitExists, setExists] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedFeatures, setClickedFeatures] = useState([]);
  const [clickedName, setClickedName] = useState('');

  const showModal = (features, name) => {
    setModalOpen(true);
    setClickedFeatures(features);
    setClickedName(name);
  };

  const modalClose = () => {
    setModalOpen(false);
  };

  const addToOutfit = (product) => {
    // Don't need a check here because it will just overwrite the object if the key exists.
    localStorage.setItem(product.id, JSON.stringify(product));

    if (outfit.some(item => item.id === product.id)) {
      return;
    }
    setOutfit([...outfit, product]);
    setExists(true);
  };

  const removeFromOutfit = (id) => {
    localStorage.removeItem(id);
    setOutfit(outfit.filter(item => item.id !== id));
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
    clearAllStars();
    fetchAllRelated(pathname);
    fetchAllPhotos(pathname);
    fetchAllStars(pathname);
    console.log(stars);
  }, [pathname]);

  return (
    <>
      <FeatureModal
        modalOpen={modalOpen}
        modalClose={modalClose}
        clickedFeatures={clickedFeatures}
        clickedName={clickedName}
      />
      <div className="relatedCards">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={150}
          totalSlides={relatedProducts.length}
          visibleSlides={4}
        >
          <Slider>
            {relatedProducts.map((product, index) => (
              <Slide index={index} key={uuid()}>
                <ProductCard
                  id={product.id}
                  key={uuid()}
                  name={product.name}
                  image={photos[index]}
                  defaultPrice={product.default_price}
                  category={product.category}
                  features={product.features}
                  addToOutfit={addToOutfit}
                  showModal={showModal}
                  stars={stars[index]}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
      <br />
      <div className="outfitCards">
        {outfitExists && (
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={outfit.length}
            visibleSlides={4}
          >
            <Slider>
              {outfit.map((item, index) => (
                <Slide index={index} key={uuid()}>
                  <OutfitCard
                    id={item.id}
                    key={uuid()}
                    name={item.name}
                    img={item.img}
                    defaultPrice={item.defaultPrice}
                    category={item.category}
                    stars={item.stars}
                    removeFromOutfit={removeFromOutfit}
                  />
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        )}
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
  fetchAllStars: (id) => {
    dispatch(fetchAllStars(id));
  },
  clearAllPhotos: () => {
    dispatch(clearAllPhotos());
  },
  clearAllRelated: () => {
    dispatch(clearAllRelated());
  },
  clearAllStars: () => {
    dispatch(clearAllStars());
  }
});

const mapStateToProps = state => ({
  relatedProducts: state.related.relatedProducts,
  photos: state.related.photos,
  stars: state.related.stars

});

Related.propTypes = {
  fetchAllRelated: PropTypes.func.isRequired,
  fetchAllPhotos: PropTypes.func.isRequired,
  fetchAllStars: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);
