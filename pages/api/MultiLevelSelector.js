import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class MultiLevelSelector extends React.Component {
  render () {
    return (
      <Document name={`api/MultiLevelSelector`} />
    )
  }
}

export default withRoot(MultiLevelSelector)
