import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class HomePage extends React.Component {
  render () {
    return (
      <Document name={`advanced-usage/format-option`} />
    )
  }
}

export default withRoot(HomePage)
