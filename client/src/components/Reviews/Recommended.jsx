import React, { Component } from 'react';
import { connect } from 'react-redux';

const calcRec = (obj) => {
  const values = Object.values(obj).reduce((a, b) => {
    return a + b;
  });

  return (obj['1'] / values) * 100;
};

const Recommended = (props) => {
  // TODO: add some calculation for % of rec users
  const { meta } = props.reviews;
  return !meta ? (
    <h4>... Loading</h4>
  ) : (
    <div style={{ color: '#A9A9A9' }}>
      {calcRec(meta.recommended).toFixed(0)}% of users recommend this product
    </div>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(Recommended);
