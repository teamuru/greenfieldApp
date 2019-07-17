import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchProduct } from '../actions/productActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchProd } = this.props;
    fetchProd(1);
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
  fetchProd: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  product: store.product
});

const mapDispatchToProps = dispatch => ({
  fetchProd: (id) => {
    dispatch(fetchProduct(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
