import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#202329'
    },
    secondary: {
      main: '#fff',
      light: '#7986cb',
      dark: '#303f9f',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600
    }
  }
})

export const spacingUnit = theme.spacing.unit

export default theme
