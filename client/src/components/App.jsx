/* eslint no-shadow: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import theme from '../theme';
import Related from './Related/Related';

// component imports
import ProductOverview from './Product/ProductOverview';
import RevParentComponent from './Reviews/RevParentComponent';
import Questions from './Questions/Question';
import ReviewsAPICalls from './Reviews/ReviewsAPICalls';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Container>
              <header>
                <AppBar position="sticky">Greenfield Logo</AppBar>
              </header>
              <main>
                <Route path="/:id" component={ProductOverview} />
                <Route path="/:id" component={Related} />
                <Route path="/:id" component={Questions} />
                <ReviewsAPICalls />
                <RevParentComponent />
              </main>
            </Container>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = store => ({
  questions: store.questions,
  related: store.related,
  relatedProducts: store.relatedProducts,
  stars: store.stars,
  outfit: store.outfit
});

export default connect(
  mapStateToProps
)(App);
