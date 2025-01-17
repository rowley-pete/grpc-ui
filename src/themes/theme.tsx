import { createTheme } from '@mui/material/styles';

const fontFamilies = [
  'Roboto',
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'Liberation Sans',
  'sans-serif'
].join(',');

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#6eb3bc'
    },
    secondary: {
      main: '#58595B'
    },
    background: {
      default: '#fff',
      paper: '#f2f2f2'
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: fontFamilies,
    body1: {
      fontWeight: 'normal'
    },
    body2: {
      fontWeight: 'normal'
    },
    h1: {
      fontWeight: 'lighter',
      fontSize: '2.5rem',
      paddingBottom: '1rem'
    },
    h2: {
      fontWeight: 'lighter',
      fontSize: '1.5rem',
      paddingBottom: '1rem'
    }
  },

  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          padding: '1rem'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'secondary'
      }
    }
  }
});