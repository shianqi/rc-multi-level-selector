import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class HomePage extends React.Component {
  render () {
    return (
      <Document name={`advanced-usage/controlled-component`} />
    )
  }
}

export default withRoot(HomePage)
