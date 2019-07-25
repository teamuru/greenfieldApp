import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { CheckCircle } from '@material-ui/icons';

import theme from '../../theme';
import { changeSelectedStyle, changeSelectedSku, resetSelectedPhoto } from '../../actions/productActions';

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const AvatarDiv = styled.div`
  position: relative;
  width: 25%;
  margin: 1.5rem 0;
`;

const AvatarStyled = styled(Avatar)`
  width: 60px;
  height: 60px;
  border: solid 3px ${theme.palette.primary.main};
  cursor: pointer;
  @media (max-width: 960px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 599px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 350px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 250px) {
    width: 25px;
    height: 25px;
  }
`;
const CheckCircleStyled = styled(CheckCircle)`
  position: absolute;
  right: calc(100% - 70px);
  top: calc(0% - 20px);
  color: ${theme.palette.secondary.main};
  @media (max-width: 960px) {
    right: calc(100% - 50px);
    top: calc(0% - 15px);
    transform: scale(0.75);
  }
  @media (max-width: 599px) {
    right: calc(100% - 70px);
    top: calc(0% - 20px);
  }
  @media (max-width: 350px) {
    right: calc(100% - 45px);
    top: calc(0% - 15px);
    transform: scale(0.7);
  }
  @media (max-width: 250px) {
    right: calc(100% - 40px);
    top: calc(0% - 15px);
    transform: scale(0.5);
  }
`;

function Styles(props) {
  const { styles, selectedStyle, handleClick } = props;
  return (
    <StylesProvider injectFirst>
      <Typography variant="subtitle2">
        STYLE &gt;
        {` ${selectedStyle.name.toUpperCase()}`}
      </Typography>
      <StyleDiv>
        {styles.map(style => (
          <Tooltip title={style.name}>
            <AvatarDiv key={style.style_id}>
              <AvatarStyled onClick={() => handleClick(style)} src={style.photos[0].thumbnail_url} alt="product style" fontSize="2rem" />
              <CheckCircleStyled />
            </AvatarDiv>
          </Tooltip>
        ))}
      </StyleDiv>
    </StylesProvider>
  );
}

Styles.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  styles: store.product.styles,
  selectedStyle: store.product.selectedStyle
});

const mapDispatchToProps = dispatch => ({
  handleClick: (selectedStyle) => {
    dispatch(changeSelectedStyle(selectedStyle));
    dispatch(changeSelectedSku(''));
    dispatch(resetSelectedPhoto());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styles);
