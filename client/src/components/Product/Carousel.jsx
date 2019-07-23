import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { ChevronLeft, ChevronRight, Fullscreen } from '@material-ui/icons';

import theme from '../../theme';
import { changeSelectedPhotoUp, changeSelectedPhotoDown, changeExpandedView } from '../../actions/productActions';

const HoverMixin = `
  color: ${theme.palette.secondary.main};
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.expandedView ? '85vh' : '70vh')};
  padding: 1rem;
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
    ${HoverMixin}
  }
`;

const ChevronRightStyled = styled(ChevronRight)`
  position: absolute;
  right: 1%;
  bottom: 50%;
  &:hover {
    ${HoverMixin}
  }
`;

const FullScreenStyled = styled(Fullscreen)`
  position: absolute;
  right: 1%;
  top: 1%;
  &:hover {
    ${HoverMixin}
  }
`;

function Carousel(props) {
  const {
 selectedStyle, selectedPhoto, expandedView, handleClickLeft, handleClickRight, handleClickExpandedView 
} = props;
  const displayChevronLeft = () => {
    if (selectedPhoto !== 0) {
      return <ChevronLeftStyled onClick={handleClickLeft} />;
    }
  };
  const displayChevronRight = () => {
    if (selectedStyle.photos.length - 1 !== selectedPhoto) {
      return <ChevronRightStyled onClick={handleClickRight} />;
    }
  };
  return Object.keys(selectedStyle).length ? (
    <StylesProvider injectFirst>
      <Container expandedView={expandedView}>
        {displayChevronLeft()}
        <Img src={selectedStyle.photos[selectedPhoto].url} alt="product" />
        <FullScreenStyled onClick={handleClickExpandedView} />
        {displayChevronRight()}
      </Container>
    </StylesProvider>
  ) : (
    <h3>Carousel</h3>
  );
}

Carousel.propTypes = {
  selectedStyle: PropTypes.object.isRequired,
  selectedPhoto: PropTypes.number.isRequired,
  expandedView: PropTypes.bool.isRequired,
  handleClickLeft: PropTypes.func.isRequired,
  handleClickRight: PropTypes.func.isRequired,
  handleClickExpandedView: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  selectedStyle: store.product.selectedStyle,
  selectedPhoto: store.product.selectedPhoto,
  expandedView: store.product.expandedView
});

const mapDispatchToProps = dispatch => ({
  handleClickRight: () => {
    dispatch(changeSelectedPhotoUp());
  },
  handleClickLeft: () => {
    dispatch(changeSelectedPhotoDown());
  },
  handleClickExpandedView: () => {
    dispatch(changeExpandedView());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
