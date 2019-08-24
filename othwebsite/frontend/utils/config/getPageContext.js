import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

const theme = createMuiTheme({
  constants: {
    drawerWidth: 190,
  },
  palette: {
    oth: {
      primary: '#0B4F6C',
      secondary: '#4281A4',
      tertiary: '#4E878C',
      quarternary: '#7C8483',
      quniary: '#A9BA9D',
      senary: '#DAD5CF',
    },
    other: {
      action: '#ED4E15',
      orange: '#F18972',
      grey1: '#EBEBEB',
      grey2: '#D8DBDD',
      text: 'azure',
      lightBG: '#E7ECE4',
    },
    primary: {
      main: '#0B4F6C',
    },
    error: {
      main: '#EB7E91',
      contrastText: '#fff',
    },
    secondary: {
      main: '#EB7E91',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
