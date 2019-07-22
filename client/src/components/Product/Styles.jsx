import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { changeSelectedStyle, changeSelectedSku } from '../../actions/productActions';

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const AvatarDiv = styled.div`
  width: 25%;
  margin-bottom: 2rem;
`;

const AvatarStyled = styled(Avatar)`
  cursor: pointer;
  width: 60px;
  height: 60px;
  @media (max-width: 960px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 600px) {
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

function Styles(props) {
  const { styles, selectedStyle, handleClick } = props;
  return (
    <StylesProvider injectFirst>
      <div>
        <Typography variant="subtitle2">
          STYLE &gt;
          {` ${selectedStyle.name.toUpperCase()}`}
        </Typography>
        <StyleDiv>
          {styles.map(style => (
            <AvatarDiv key={style.style_id}>
              <Tooltip title={style.name}>
                <AvatarStyled onClick={() => handleClick(style)} src={style.photos[0].thumbnail_url} alt="product style" fontSize="2rem" />
              </Tooltip>
            </AvatarDiv>
          ))}
        </StyleDiv>
      </div>
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styles);
