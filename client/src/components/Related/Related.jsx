import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import {
  fetchRelatedIDs,
  fetchRelatedProduct
} from '../../actions/relatedActions';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <ProductCard />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRelatedIDs: (id) => {
    dispatch(fetchRelatedIDs(id));
  },
  fetchRelatedProduct: (id) => {
    dispatch(fetchRelatedProduct(id));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Related);
