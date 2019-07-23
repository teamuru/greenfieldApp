import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../theme';

const Img = styled.img`
  padding: 5%;
  width: 100%;
  height: 600px;
  object-fit: contain;
  position: relative;
  box-shadow: 0px 0px 20px ${theme.palette.secondary.contrastText};
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPhoto: 0 };
  }

  render() {
    const { selectedPhoto } = this.state;
    const { selectedStyle } = this.props;
    return Object.keys(selectedStyle).length ? (
      <React.Fragment>
        <Img src={selectedStyle.photos[selectedPhoto].url} alt="product" />
      </React.Fragment>
    ) : (
      <h3>Carousel</h3>
    );
  }
}

Carousel.propTypes = {
  selectedStyle: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  selectedStyle: store.product.selectedStyle
});

export default connect(mapStateToProps)(Carousel);
