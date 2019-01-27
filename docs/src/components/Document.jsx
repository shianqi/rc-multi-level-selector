import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import novaCodeHighlighting from 'UTILS/novaCodeHighlighting'
import {
  paletteGrey,
  spacingUnit,
  paletteSecondaryMain
} from 'UTILS/theme'

const GlobaNova = createGlobalStyle`
  ${novaCodeHighlighting};
`

const DocumentStyle = createGlobalStyle`
  hr {
    margin: 0;
    border: 0;
    border-top: 1px solid ${paletteGrey[200]};
    margin-bottom: 8px;
  }
`

const H1 = styled((props) => (
  <Typography {...props} variant='h1' />
))`
  opacity: 1;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
`

const H2 = styled((props) => (
  <Typography {...props} variant='h2' />
))`
  opacity: 1;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
`

const H3 = styled((props) => (
  <Typography {...props} variant='h3' />
))`
  opacity: 1;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
`

const H4 = styled((props) => (
  <Typography {...props} variant='h4' />
))`
  opacity: 1;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
`

const H5 = styled((props) => (
  <Typography {...props} variant='h5' />
))`
  opacity: 1;
  position: relative;
`

const H6 = styled((props) => (
  <Typography {...props} variant='h6' />
))`
  opacity: 1;
  position: relative;
`

const A = styled.a`
  background-color: rgba(187, 239, 253, 0.3);
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);

  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  }
`

const P = styled((props) => (
  <Typography {...props} variant='body1' />
))`
  opacity: 1;
  margin-bottom: 16px;
`

const UL = styled.ul`
  opacity: 1;
`

const LI = styled.li`
  opacity: 1;
`

const Table = styled.table`
  display: block;
  overflow: auto;
  width: 100%;
  line-height: 1.5;
  border-collapse: collapse;
  border-spacing: 0;
  background: #fff;
`

const TR = styled.tr`
  border-top: 1px solid #c6cbd1;

  &:nth-child(2n) {
    background-color: #f6f8fa;
  }
`

const TD = styled.td`
  border: 1px solid #dfe2e5;
  min-width: 200px;
  padding: 6px 13px;
`

const TH = styled.th`
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
`

const InlineCode = styled.code`
  padding: 2px 4px;
  background-color: #f2f2f2;
  border: none;
  font-size: 16px;
  white-space: pre-wrap;
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

const Blockquote = styled.blockquote`
  margin: 16px 0;
  border-left: ${spacingUnit}px solid ${paletteSecondaryMain};
  background: ${paletteGrey[200]};
  padding: 16px 24px;
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
        <DocumentStyle />
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
            table: Table,
            tr: TR,
            th: TH,
            td: TD,
            pre: Pre,
            code: Code,
            blockquote: Blockquote,
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
