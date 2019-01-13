import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class HomePage extends React.Component {
  render () {
    return (
      <Document name={`getting-started/usage`} />
    )
  }
}

export default withRoot(HomePage)
