import React from 'react'
import AppWrapper from './AppWrapper'

const withRoot = (Component) => {
  class WithRoot extends React.PureComponent {
    render () {
      return (
        <AppWrapper>
          <Component />
        </AppWrapper>
      )
    }
  }

  return WithRoot
}

export default withRoot
