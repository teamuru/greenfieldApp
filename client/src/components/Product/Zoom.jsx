/* eslint-disable react/no-unused-state */
// See https://codepen.io/robertkirsz/pen/ZvorjB for information on this component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FigureStyled = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-left: 80px;
  padding-right: 20px;
  object-fit: contain;
  background-repeat: no-repeat;
  cursor: zoom-out;
`;

class Zoom extends Component {
  constructor(props) {
    super(props);
    const { src } = this.props;
    this.state = { backgroundImage: `url(${src})`, backgroundPosition: '50% 50%' };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    const {
 left, top, width, height 
} = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  }

  render() {
    const { handleClick } = this.props;
    return <FigureStyled onClick={handleClick} onMouseMove={this.handleMouseMove} style={this.state} />;
  }
}

Zoom.propTypes = {
  handleClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
  src: store.product.selectedStyle.photos[store.product.selectedPhoto].url
});

export default connect(mapStateToProps)(Zoom);
