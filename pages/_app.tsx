import MuiProvider from 'COMPONENTS/expand/MuiProvider'
import configureStore from 'REDUX/store'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from 'styled-components'
import theme from 'UTILS/theme'

const store = configureStore()

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>RC-multi-level-selector</title>
        </Head>
        <MuiProvider>
          <CssBaseline />
          {/* <Normalize /> */}
          {/* <GlobalStyle /> */}
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </MuiProvider>
      </>
    )
  }
}

export default MyApp
