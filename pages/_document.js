import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  render () {
    const { pageContext } = this.props

    return (
      <html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={pageContext.theme.palette.primary.main} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ({ renderPage }) => {
  const sheet = new ServerStyleSheet()

  let pageContext
  const page = renderPage(App => props => {
    pageContext = props.pageContext
    return sheet.collectStyles(<App {...props} />)
  })

  // const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
  const styleTags = sheet.getStyleElement()
  // return { ...page, styleTags }

  return {
    ...page,
    styleTags,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default MyDocument
