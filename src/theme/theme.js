import { createTheme  } from '@material-ui/core/styles'

const theme = createTheme ({
    palette: {
        primary: {
            main: '#3b8249',
        },
        secondary: {
            main: '#17a2b8',
        },
        success: {
            main: '#008B8B'
        },
        background: {
            erreparLight: '#f8f9fa',
            erreparMedium: '#e9ecef',
            erreparDarkCyan: '#008B8B',
        },
    },
    typography: {
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
})

export default theme;