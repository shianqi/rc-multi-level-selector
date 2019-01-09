import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#202329'
    },
    secondary: {
      main: '#f45421'
    }
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: '3.5rem',
      lineHeight: 1.5,
      fontWeight: 600
    },
    h2: {
      fontSize: '2.125rem',
      lineHeight: 1.5,
      fontWeight: 600
    },
    h3: {
      fontSize: '2rem',
      lineHeight: 1.5
    },
    h4: {
      fontSize: '1.75rem',
      lineHeight: 1.5
    },
    h5: {
      lineHeight: 1.5
    },
    h6: {
      lineHeight: 1.5
    }
  }
})

export const spacingUnit = theme.spacing.unit

export default theme
