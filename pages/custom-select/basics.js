import React from 'react'
import withRoot from '../../docs/src/components/withRoot'
import Document from '../../docs/src/components/Document'

class HomePage extends React.Component {
  render () {
    return (
      <Document name={`custom-select/basics`} />
    )
  }
}

export default withRoot(HomePage)
