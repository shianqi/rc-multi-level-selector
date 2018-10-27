import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff'
    },
    secondary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  }
})

export const palettePrimaryMain = props => props.theme.palette.primary.main
export const palettePrimaryLight = props => props.theme.palette.primary.light
export const palettePrimaryDark = props => props.theme.palette.primary.dark
export const palettePrimaryContrastText = props => props.theme.palette.primary.contrastText

export const spacingUnit = size => props => (props.theme.spacing.unit * size)
export const shapeBorderRadius = props => props.theme.shape.borderRadius
