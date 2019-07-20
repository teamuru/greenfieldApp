import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import { changeSelectedStyle } from '../../actions/productActions';

class Styles extends Component {
  render() {
    const { styles, selectedStyle } = this.props;
    console.log(this.props);
    return (
      <div>
        <h6>
          STYLE &gt;
          {` ${styles[selectedStyle].name.toUpperCase()}`}
        </h6>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {styles.map(style => (
            <Avatar src={style.photos[0].thumbnail_url} />
          ))}
        </div>
      </div>
    );
  }
}

Styles.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.number.isRequired
};

const mapStateToProps = store => ({
  styles: store.product.styles,
  selectedStyle: store.product.selectedStyle
});

const mapDispatchToProps = dispatch => ({
  handleClick: prodId => dispatch(changeSelectedStyle(prodId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styles);
