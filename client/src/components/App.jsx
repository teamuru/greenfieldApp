import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../actions/productActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo">Greenfield Logo</div>
          </div>
        </nav>
      </div>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
  // loading: state.products.loading,
  // error: state.products.error,
});

export default connect(
  mapStateToProps,
  actions,
)(App);
