import React from 'react'
import withRoot from '../docs/src/components/withRoot'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        Hello, World
      </div>
    )
  }
}

export default withRoot(HomePage)
