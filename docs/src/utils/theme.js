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
      fontSize: '3.75rem', // 60px
      lineHeight: 1.5,
      fontWeight: 600
    },
    h2: {
      fontSize: '2.5rem', // 40px
      lineHeight: 1.5,
      fontWeight: 600
    },
    h3: {
      fontSize: '2rem', // 32px
      lineHeight: 1.5,
      fontWeight: 600
    },
    h4: {
      fontSize: '1.5rem', // 24px
      lineHeight: 1.5,
      fontWeight: 600
    },
    h5: {
      fontSize: '1.25rem', // 20px
      lineHeight: 1.5
    },
    h6: {
      fontSize: '1rem', // 16px
      lineHeight: 1.5
    }
  }
})

export const spacingUnit = theme.spacing.unit

export const paletteGrey = theme.palette.grey
export const palettePrimaryMain = theme.palette.primary.main
export const paletteSecondaryMain = theme.palette.secondary.main

export default theme
