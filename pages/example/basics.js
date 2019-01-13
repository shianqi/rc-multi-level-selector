import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class ExampleBasics extends React.Component {
  render () {
    return (
      <Document name={`example/basics`} />
    )
  }
}

export default withRoot(ExampleBasics)
