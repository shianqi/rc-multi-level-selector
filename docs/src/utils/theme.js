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
    },
    typography: {
      useNextVariants: true
    }
  }
})

export default theme
