/* eslint no-shadow: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { fetchQuestions } from '../actions/questionsActions';
import { fetchRelatedIDs, fetchRelatedProduct, fetchStars } from '../actions/relatedActions';
import theme from '../theme';

// component imports
import ProductOverview from './Product/ProductOverview';
import RevParentComponent from './Reviews/RevParentComponent';
import SearchQuestions from './Questions/SearchQuestions';
import ReviewsAPICalls from './Reviews/ReviewsAPICalls';

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
 fetchQuestions, fetchRelatedIDs, fetchRelatedProduct, fetchStars 
} = this.props;
    fetchQuestions(1);
    // fetchReviews(1);
    fetchRelatedIDs(1);
    fetchRelatedProduct(1);
    fetchRelatedProduct(2);
    fetchStars(1);
    fetchStars(2);
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
                  <Route path="/:id" component={ProductOverview} />
                  <SearchQuestions />
                </main>
              </div>
              <ReviewsAPICalls />
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
  fetchQuestions: PropTypes.func.isRequired,
  fetchRelatedIDs: PropTypes.func.isRequired,
  fetchRelatedProduct: PropTypes.func.isRequired,
  fetchStars: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  questions: store.questions,
  related: store.related,
  relatedProducts: store.relatedProducts,
  stars: store.stars,
  outfit: store.outfit
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (id) => {
    dispatch(fetchQuestions(id));
  },
  fetchRelatedIDs: (id) => {
    dispatch(fetchRelatedIDs(id));
  },
  fetchRelatedProduct: (id) => {
    dispatch(fetchRelatedProduct(id));
  },
  fetchStars: (id) => {
    dispatch(fetchStars(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
