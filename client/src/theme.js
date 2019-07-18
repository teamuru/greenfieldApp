import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'FF3433',
      main: '#FF0200',
      dark: '#B20100',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#333333',
      main: '#000000',
      dark: '#000000',
      contrastText: '#FFFFFF'
    }
  },
  typography: {
    // TODO: fill
  }
});

export default theme;
