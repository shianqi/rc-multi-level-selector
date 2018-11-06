import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b172f'
    },
    secondary: {
      main: '#fff',
      light: '#7986cb',
      dark: '#303f9f',
      contrastText: '#fff'
    }
  }
})

export default theme
