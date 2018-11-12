import React from 'react'
import styled from 'styled-components'

// const Base = styled.p`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   font-size: 16px;
//   line-height: 1.5;
//   word-wrap: break-word;
// `

const H1 = styled.h1`
`

const H2 = styled.h2`
`

const H3 = styled.h3`
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
`

const Code = styled.code`
`

const Pre = styled.pre`
`

const getDocs = name => require(`../pages/${name}.mdx`).default

class Document extends React.PureComponent {
  render () {
    const { name = 'installation' } = this.props
    const Component = getDocs(name)

    return (
      <Component
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          ul: UL,
          li: LI,
          p: P,
          a: A,
          pre: Pre,
          code: Code,
          inlineCode: InlineCode
        }}
      />
    )
  }
}

export default Document
