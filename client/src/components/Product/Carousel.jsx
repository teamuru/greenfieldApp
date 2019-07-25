import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { Avatar } from '@material-ui/core';
import {
 ChevronLeft, ChevronRight, Fullscreen, ArrowDropDown, ArrowDropUp 
} from '@material-ui/icons';

import theme from '../../theme';
import {
 changeSelectedPhotoUp, changeSelectedPhotoDown, changeSelectedPhotoIndex, changeExpandedView 
} from '../../actions/productActions';

const MainMixin = `
  color: ${theme.palette.primary.main};
`;

const HoverMixin = `
  color: ${theme.palette.secondary.main};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.expandedView ? '85vh' : '70vh')};
  padding: 1rem;
  box-shadow: 0px 0px 20px grey;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding-left: 80px;
  padding-right: 20px;
  object-fit: contain;
`;

const ChevronLeftStyled = styled(ChevronLeft)`
  position: absolute;
  left: 60px;
  bottom: 50%;
  ${MainMixin}
  cursor: pointer;
  &:hover {
    ${HoverMixin}
  }
`;

const ChevronRightStyled = styled(ChevronRight)`
  position: absolute;
  right: 0px;
  bottom: 50%;
  cursor: pointer;
  ${MainMixin}
  &:hover {
    ${HoverMixin}
  }
`;

const FullScreenStyled = styled(Fullscreen)`
  position: absolute;
  right: 0%;
  top: 0%;
  ${MainMixin}
  cursor: pointer;
  &:hover {
    ${HoverMixin}
  }
`;

const AvatarDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AvatarStyled = styled(Avatar)`
  border-radius: 0;
  margin-bottom: 1rem;
  margin-top: ${props => (props.selectedphoto === 0 && props.index === 0 ? '38px' : '0px')};
  cursor: pointer;
  border: solid 2.5px ${props => (props.selectedphoto === props.index ? theme.palette.secondary.main : theme.palette.primary.main)};
`;

const ArrowDropUpStyled = styled(ArrowDropUp)`
  cursor: pointer;
  margin-bottom: 1rem;
  ${MainMixin}
  &:hover {
    ${HoverMixin}
  }
`;

const ArrowDropDownStyled = styled(ArrowDropDown)`
  cursor: pointer;
  ${MainMixin}
  &:hover {
    ${HoverMixin}
  }
`;

function Carousel(props) {
  const {
 selectedStyle, selectedPhoto, expandedView, handlePhotoIndexDown, handlePhotoIndexUp, handleClickPhotoIndex, handleClickExpandedView 
} = props;
  const displayPhotoIndexDown = (chevronOrArrow) => {
    if (selectedPhoto !== 0) {
      if (chevronOrArrow === 'chevron') {
        return <ChevronLeftStyled onClick={handlePhotoIndexDown} />;
      }
      if (chevronOrArrow === 'arrow') {
        return <ArrowDropUpStyled onClick={handlePhotoIndexDown} />;
      }
    }
  };
  const displayPhotoIndexUp = (chevronOrArrow) => {
    if (selectedStyle.photos.length - 1 !== selectedPhoto) {
      if (chevronOrArrow === 'chevron') {
        return <ChevronRightStyled onClick={handlePhotoIndexUp} />;
      }
      if (chevronOrArrow === 'arrow') {
        return <ArrowDropDownStyled onClick={handlePhotoIndexUp} />;
      }
    }
  };

  const displayOverlays = (photos) => {
    const avatars = photos.map((photo, index) => (
      <AvatarStyled
        key={index}
        onClick={() => {
          handleClickPhotoIndex(index);
        }}
        src={photo.url}
        selectedphoto={selectedPhoto}
        index={index}
      />
    ));
    if (photos.length > 7) {
      if (photos.length - selectedPhoto > 7) {
        return avatars.slice(selectedPhoto, selectedPhoto + 7);
      }
      return avatars.slice(photos.length - 7, photos.length);
    }
    return avatars;
  };

  return Object.keys(selectedStyle).length ? (
    <StylesProvider injectFirst>
      <Container expandedView={expandedView}>
        <AvatarDiv>
          {displayPhotoIndexDown('arrow')}
          {displayOverlays(selectedStyle.photos)}
          {displayPhotoIndexUp('arrow')}
        </AvatarDiv>
        {displayPhotoIndexDown('chevron')}
        <Img src={selectedStyle.photos[selectedPhoto].url} alt="product" />
        <FullScreenStyled onClick={handleClickExpandedView} />
        {displayPhotoIndexUp('chevron')}
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
  handlePhotoIndexDown: PropTypes.func.isRequired,
  handlePhotoIndexUp: PropTypes.func.isRequired,
  handleClickPhotoIndex: PropTypes.func.isRequired,
  handleClickExpandedView: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  selectedStyle: store.product.selectedStyle,
  selectedPhoto: store.product.selectedPhoto,
  expandedView: store.product.expandedView
});

const mapDispatchToProps = dispatch => ({
  handlePhotoIndexUp: () => {
    dispatch(changeSelectedPhotoUp());
  },
  handlePhotoIndexDown: () => {
    dispatch(changeSelectedPhotoDown());
  },
  handleClickPhotoIndex: (index) => {
    dispatch(changeSelectedPhotoIndex(index));
  },
  handleClickExpandedView: () => {
    dispatch(changeExpandedView());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
