import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import theme from '../../theme';
import { changeSelectedPhotoUp, changeSelectedPhotoDown } from '../../actions/productActions';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  padding: 5%;
  box-shadow: 0px 0px 20px ${theme.palette.secondary.contrastText};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ChevronLeftStyled = styled(ChevronLeft)`
  position: absolute;
  left: 1%;
  bottom: 50%;
  &:hover {
    color: ${theme.palette.secondary.main};
    cursor: pointer;
  }
`;

const ChevronRightStyled = styled(ChevronRight)`
  position: absolute;
  right: 1%;
  bottom: 50%;
  &:hover {
    color: ${theme.palette.secondary.main};
    cursor: pointer;
  }
`;

class Carousel extends Component {
  render() {
    const {
 styles, selectedStyle, selectedPhoto, handleClickLeft, handleClickRight 
} = this.props;
    const displayChevronLeft = () => {
      if (selectedPhoto !== 0) {
        return <ChevronLeftStyled onClick={handleClickLeft} />;
      }
    };
    const displayChevronRight = () => {
      if (styles.length - 1 !== selectedPhoto) {
        return <ChevronRightStyled onClick={handleClickRight} />;
      }
    };
    return Object.keys(selectedStyle).length ? (
      <StylesProvider injectFirst>
        <Container>
          {displayChevronLeft()}
          <Img src={selectedStyle.photos[selectedPhoto].url} alt="product" />
          {displayChevronRight()}
        </Container>
      </StylesProvider>
    ) : (
      <h3>Carousel</h3>
    );
  }
}

Carousel.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.object.isRequired,
  selectedPhoto: PropTypes.number.isRequired,
  handleClickLeft: PropTypes.func.isRequired,
  handleClickRight: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  styles: store.product.styles,
  selectedStyle: store.product.selectedStyle,
  selectedPhoto: store.product.selectedPhoto
});

const mapDispatchToProps = dispatch => ({
  handleClickRight: () => {
    dispatch(changeSelectedPhotoUp());
  },
  handleClickLeft: () => {
    dispatch(changeSelectedPhotoDown());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
