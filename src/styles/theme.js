import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiContainer: {
      // The default props to change
      maxWidth: 'xl',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontSize: '16px',
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      },
    },
    MuiButton: {
      root: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      contained: {
        textTransform: 'none',
        backgroundColor: '#FF2636',
        color: 'white',
        '&:focus': {
          backgroundColor: '#CC1E2B',
          boxShadow: '0 0 0 4px #FFD4D7',
        },
        '&:hover': {
          backgroundColor: '#CC1E2B',
        },
      },
    },
  },
})

export default theme
