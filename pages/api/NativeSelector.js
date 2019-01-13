import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class NativeSelector extends React.Component {
  render () {
    return (
      <Document name={`api/NativeSelector`} />
    )
  }
}

export default withRoot(NativeSelector)
