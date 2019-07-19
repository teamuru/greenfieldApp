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
import theme from '../theme';
import Related from './Related/Related';

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
    const { fetchQuestions } = this.props;
    fetchQuestions(1);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Container>
              <header>
                <AppBar position="sticky">Greenfield Logo</AppBar>
              </header>
              <div>
                <main>
                  <Route path="/:id" component={ProductOverview} />
                  <Route path="/:id" component={Related} />
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
  fetchQuestions: PropTypes.func.isRequired
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
