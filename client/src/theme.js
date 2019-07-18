import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7BDFF2',
      main: '#7BDFF2',
      dark: '#7BDFF2',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10
  }
});

export default theme;
