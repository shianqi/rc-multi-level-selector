import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { create } from 'jss'
import { Provider } from 'react-redux'
import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from 'UTILS/getPageContext'
import configureStore from 'REDUX/store'

const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point-app'
})

const store = configureStore()

class MyApp extends App {
  constructor (props) {
    super(props)
    this.pageContext = getPageContext()
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>RC-multi-level-selector</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
          jss={jss}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}

            <ThemeProvider theme={this.pageContext.theme}>
              <Provider store={store}>
                <Component pageContext={this.pageContext} {...pageProps} />
              </Provider>
            </ThemeProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp
