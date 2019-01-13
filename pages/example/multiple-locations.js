import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class MultipleLocations extends React.Component {
  render () {
    return (
      <Document name={`example/multiple-locations`} />
    )
  }
}

export default withRoot(MultipleLocations)
