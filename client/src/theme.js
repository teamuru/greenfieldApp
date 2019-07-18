import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#14213D',
      main: '#14213D',
      dark: '#14213D',
      contrastText: '#E5E5E5'
    },
    secondary: {
      light: '#FCA311',
      main: '#FCA311',
      dark: '#FCA311',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10
  }
});

export default theme;
