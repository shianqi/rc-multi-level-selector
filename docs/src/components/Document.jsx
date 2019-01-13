import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import NovaCodeHighlighting from 'UTILS/novaCodeHighlighting'

const GlobaNova = createGlobalStyle`
  ${NovaCodeHighlighting};
`

// const Base = styled.p`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   font-size: 16px;
//   line-height: 1.5;
//   word-wrap: break-word;
// `

const H1 = styled((props) => (
  <Typography {...props} variant='h1' />
))`
`

const H2 = styled((props) => (
  <Typography {...props} variant='h2' />
))`
`

const H3 = styled((props) => (
  <Typography {...props} variant='h3' />
))`
`

const H4 = styled((props) => (
  <Typography {...props} variant='h4' />
))`
`

const H5 = styled((props) => (
  <Typography {...props} variant='h5' />
))`
`

const H6 = styled((props) => (
  <Typography {...props} variant='h6' />
))`
`

const A = styled.a`
`

const P = styled.p`
`

const UL = styled.ul`
`

const LI = styled.li`
`

const InlineCode = styled.code`
  padding: 2px 4px;
  background-color: #f2f2f2;
  border: none;
  font-size: 13px;
  white-space: pre-wrap;
  vertical-align: middle;

  color: #c7254e;
  border-radius: 4px;
`

const Code = styled.code`
  overflow-x: auto;
  background: #282c34;
  color: #abb2bf;
`

const Pre = styled.pre`
  overflow-x: auto;
  padding: 12px 18px;
  background: #282c34;
  color: #abb2bf;
  border-radius: 4px;
`

const getDocs = (name, lang) => require(`../pages/${name}${lang}.mdx`).default

class Document extends React.PureComponent {
  render () {
    const { language } = this.props
    const long = language === 'en' ? '' : `-${language}`
    const { name = 'installation' } = this.props
    const Component = getDocs(name, long)

    return (
      <Fragment>
        <GlobaNova />
        <Component
          components={{
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            ul: UL,
            li: LI,
            p: P,
            a: A,
            pre: Pre,
            code: Code,
            inlineCode: InlineCode
          }}
        />
      </Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  const { app } = state
  const { language } = app
  return {
    language
  }
}

export default connect(mapStateToProps)(Document)
