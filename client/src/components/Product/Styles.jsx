import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { changeSelectedStyle, changeSelectedSku } from '../../actions/productActions';

class Styles extends Component {
  render() {
    const { styles, selectedStyle, handleClick } = this.props;
    const avatarStyle = { cursor: 'pointer' };
    return (
      <div>
        <h6>
          STYLE &gt;
          {` ${selectedStyle.name.toUpperCase()}`}
        </h6>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {styles.map(style => (
            <Tooltip key={style.style_id} disableFocusListener title={style.name}>
              <Avatar style={avatarStyle} onClick={() => handleClick(style)} src={style.photos[0].thumbnail_url} alt="product style" />
            </Tooltip>
          ))}
        </div>
      </div>
    );
  }
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
