import { createMuiTheme } from '@material-ui/core/styles';

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FDE3E4",
    },
    secondary: {
      main: "#646EFB",
    },
    background: {
      default: "#FCF5FF",
    },
  },
  typography: {
    h5: {
      fontSize: "18pt",
      fontWeight: 600,
    },
    h6: {
      fontSize: "13pt",
      fontWeight: 600,
    },
    subtitle2: {
      size: "14px",
    },
  },
});

export default GlobalTheme;
