import React from 'react'
import withRoot from 'COMPONENTS/withRoot'
import Document from 'COMPONENTS/Document'

class SingleLocation extends React.Component {
  render () {
    return (
      <Document name={`example/single-location`} />
    )
  }
}

export default withRoot(SingleLocation)
