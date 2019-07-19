/* eslint no-shadow: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { fetchProduct } from '../actions/productActions';
import { fetchQuestions } from '../actions/questionsActions';
import { fetchAllRelated } from '../actions/relatedActions';


import theme from '../theme';
import Related from './Related/Related';

// component imports
import RevParentComponent from './Reviews/RevParentComponent';
import SearchQuestions from './Questions/SearchQuestions';

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
  componentDidMount() {
    const {
      fetchProduct,
      fetchQuestions,
      fetchReviews,
      fetchAllRelated

    } = this.props;
    fetchProduct(1);
    fetchQuestions(1);
    fetchReviews(1);
    fetchAllRelated(1);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <header>
              <AppBar position="sticky">Greenfield Logo</AppBar>
            </header>
            <Container>
              <div>
                <main>
                  <Related />
                  <Route path="/:id" component={Product} />
                  <SearchQuestions />
                </main>
              </div>
              <RevParentComponent />
            </Container>
          </Router>
        </CssBaseline>
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
  fetchAllRelated: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  product: store.product,
  questions: store.questions,
  reviews: store.reviews,
  related: store.related,
  relatedProducts: store.relatedProducts,
  stars: store.stars,
  outfit: store.outfit
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
  fetchAllRelated: (id) => {
    dispatch(fetchAllRelated(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
