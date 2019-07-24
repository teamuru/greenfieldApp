/* eslint no-shadow: "off" */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import theme from '../theme';
import './App.css';

// component imports
import ProductOverview from './Product/ProductOverview';
import Related from './Related/Related';
import Questions from './Questions/Question';
import ReviewsWrapper from './Reviews/ReviewsWrapper';

const AppBarStyled = styled(AppBar)`
  padding: 1.5rem;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Container>
              <header>
                <AppBarStyled position="sticky">Greenfield Logo</AppBarStyled>
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
