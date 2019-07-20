import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

export default class Styles extends Component {
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
