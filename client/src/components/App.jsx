/* eslint no-shadow: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { fetchProduct } from '../actions/productActions';
import { fetchReviews } from '../actions/reviewActions';
import { fetchQuestions } from '../actions/questionsActions';
import { fetchRelatedIDs, fetchRelatedProduct } from '../actions/relatedActions';
import theme from '../theme';

// component imports
import RevParentComponent from './Reviews/RevParentComponent';

const Product = ({ match }) => (
  <div>
    <h5>
      {' '}
      Render Product with id:
      {match.params.id}
    </h5>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: fixed with live ids later on
      productIds: [1, 2, 3, 4, 5]
    };
  }

  componentDidMount() {
    const {
 fetchProduct, fetchQuestions, fetchReviews, fetchRelatedIDs, fetchRelatedProduct 
} = this.props;
    fetchProduct(1);
    fetchQuestions(1);
    fetchReviews(1);
    fetchRelatedIDs(1);
    fetchRelatedProduct(1);
    fetchRelatedProduct(2);
  }

  render() {
    const { productIds } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Router>
            <div>
              <AppBar>
                <div>
                  <div>Greenfield Logo</div>
                  <ul />
                </div>
              </AppBar>
              <ul>
                {productIds.map(product => (
                  <li key={product}>
                    <Link to={`/${product}`}>
                      {' '}
                      Product
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>

              <Route path="/:id" component={Product} />
            </div>
          </Router>

          <RevParentComponent />
        </Container>
      </MuiThemeProvider>
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf(Object).isRequired
};

App.propTypes = {
  fetchProduct: PropTypes.func.isRequired,
  fetchReviews: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  fetchRelatedIDs: PropTypes.func.isRequired,
  fetchRelatedProduct: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  product: store.product,
  questions: store.questions,
  reviews: store.reviews,
  related: store.related,
  relatedProducts: store.relatedProducts
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => {
    dispatch(fetchProduct(id));
  },
  fetchQuestions: (id) => {
    dispatch(fetchQuestions(id));
  },
  fetchReviews: (id) => {
    dispatch(fetchReviews(id));
  },
  fetchRelatedIDs: (id) => {
    dispatch(fetchRelatedIDs(id));
  },
  fetchRelatedProduct: (id) => {
    dispatch(fetchRelatedProduct(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
