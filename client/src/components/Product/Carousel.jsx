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
 selectedStyle, selectedPhoto, handleClickLeft, handleClickRight 
} = this.props;
    return Object.keys(selectedStyle).length ? (
      <StylesProvider injectFirst>
        <Container>
          <ChevronLeftStyled onClick={handleClickLeft} />
          <Img src={selectedStyle.photos[selectedPhoto].url} alt="product" />
          <ChevronRightStyled onClick={handleClickRight} />
        </Container>
      </StylesProvider>
    ) : (
      <h3>Carousel</h3>
    );
  }
}

Carousel.propTypes = {
  selectedStyle: PropTypes.object.isRequired,
  selectedPhoto: PropTypes.number.isRequired,
  handleClickLeft: PropTypes.func.isRequired,
  handleClickRight: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
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
