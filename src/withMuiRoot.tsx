import CssBaseline from 'material-ui/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';

const theme = createMuiTheme();

const withMuiRoot = (Component: React.ComponentType) => (props: any) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  );
};

export default withMuiRoot;
