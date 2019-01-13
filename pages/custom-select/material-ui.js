import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class HomePage extends React.Component {
  render () {
    return (
      <Document name={`custom-select/material-ui`} />
    )
  }
}

export default withRoot(HomePage)
