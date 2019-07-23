/* eslint no-shadow: "off" */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import theme from '../theme';
import Related from './Related/Related';
import './App.css';

// component imports
import ProductOverview from './Product/ProductOverview';
import Questions from './Questions/Question';
import ReviewsWrapper from './Reviews/ReviewsWrapper';

class App extends Component {
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
                <Route path="/:id" component={ReviewsWrapper} />
              </main>
            </Container>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default App;
